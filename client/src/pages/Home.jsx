import { getApolloContext, useQuery } from '@apollo/client';
import { Grid, Transition, GridRow, Button, Icon } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import NewPost from '../components/NewPost';
import DevCard from '../components/developer';

import { QUERY_POSTS } from '../utils/queries';

const likeId = localStorage.getItem('likeId');

const Home = () => {
  console.log(likeId);
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main>
      <div>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <Grid id="top" columns="two">
                <Grid.Row className="contain-post">
                  <NewPost />
                </Grid.Row>

                <GridRow className="page-picture">
                  <a href="#feed">
                    <div className="banner"></div>
                  </a>
                  <h1 id="feed">The Feed</h1>
                </GridRow>
                <Transition.Group className="row">
                  <h2>Double Click to Save Post to your Profile</h2>
                  {posts &&
                    posts.map((post) => (
                      <Grid.Column key={post._id}>
                        <PostCard post={post} likeId={likeId} />
                      </Grid.Column>
                    ))}
                </Transition.Group>
                <div className="center">
                  <Button className="btn primary">
                    <a href="#top">Back to Top</a>
                  </Button>
                </div>
                <div>
                  <DevCard />
                </div>
              </Grid>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
