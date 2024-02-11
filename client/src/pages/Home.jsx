import { useQuery } from '@apollo/client';
import { Grid, Transition, GridRow, Button } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import ProfileList from '../components/ProfileList';
import NewPost from '../components/NewPost';

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
                <Transition.Group>
                  {posts &&
                    posts.map((post) => (
                      <Grid.Column key={post._id}>
                        <PostCard post={post} />
                      </Grid.Column>
                    ))}
                </Transition.Group>
              </Grid>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
