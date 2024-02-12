import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import {
  CardMeta,
  CardHeader,
  Button,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';
import SkillsList from '../components/SkillsList';
import SkillForm from '../components/SkillForm';

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};
  localStorage.setItem('likeId', profile._id);

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }
  console.log(data);

  return (
    <div>
      <div className="profile-container">
        <Card>
          <h2 className="green">Your Hidden Profile</h2>

          <Image
            src="https://img.freepik.com/premium-vector/man-silhouette-profile-male-avatar-anonymous-icon-censored-face_434359-85.jpg?w=996"
            wrapped
            ui={false}
            className="profile-pic"
          />
          <CardContent>
            <CardHeader className="profile-title">{profile.name}</CardHeader>
            <CardMeta>
              <span className="profile-secondary">Email: {profile.email}</span>
              <br></br>
              <span className="profile-secondary">ID# {profile._id}</span>
            </CardMeta>
          </CardContent>
        </Card>
      </div>
      <h2 className="card-header">
        {profileId ? `${profile.name}'s` : 'Hello'} {profile.name}
      </h2>
      <h3>Saved Posts:</h3>

      {profile.skills?.length > 0 && (
        <SkillsList
          skills={profile.skills}
          isLoggedInUser={!profileId && true}
        />
      )}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <SkillForm profileId={profile._id} />
      </div>
    </div>
  );
};

export default Profile;
