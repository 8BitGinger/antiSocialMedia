import { useQuery } from '@apollo/client';
import { Grid, Transition, GridRow, Button, Icon } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import ProfileList from '../components/ProfileList';
import NewPost from '../components/NewPost';
import DevCard from '../components/developer';

import { QUERY_POSTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main>
      <div className="">
        <div className="">
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
                  <h1>The Feed</h1>
                </GridRow>
                <Transition.Group>
                  <h2>Double Click to add Post to your saved quotes</h2>
                  {posts &&
                    posts.map((post) => (
                      <Grid.Column key={post._id}>
                        <PostCard post={post} />
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
