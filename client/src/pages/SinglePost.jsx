import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import React, { useContext } from 'react';

import SkillsList from '../components/SkillsList';
import SkillForm from '../components/SkillForm';

import { QUERY_SINGLE_POST, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

// function SinglePost(props) {
//   const { postId } = useParams();

//   // If there is no `postId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
//   const { loading, data } = useQuery(postId ? QUERY_SINGLE_POST : QUERY_ME, {
//     variables: { postId: postId },
//   });

//   // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_POST` query
//   const post = data?.me || data?.post || {};

//   // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && getPost().data._id === postId) {
//     return <Navigate to="/me" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!post?.name) {
//     return (
//       <h4>
//         You need to be logged in to see your profile page. Use the navigation
//         links above to sign up or log in!
//       </h4>
//     );
//   }

//   return (
//     <div>
//       <h2 className="card-header">
//         {postId ? `${post.name}'s` : 'Hello'} {post.name}
//       </h2>
//       <h3>Comments Below</h3>

//       {post.skills?.length > 0 && (
//         <SkillsList skills={post.skills} isLoggedInUser={!postId && true} />
//       )}

//       <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
//         <SkillForm postId={post._id} />
//       </div>
//     </div>
//   );
// }

export default SinglePost;
