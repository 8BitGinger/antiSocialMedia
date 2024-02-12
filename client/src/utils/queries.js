import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
      email
    }
  }
`;

export const QUERY_POSTS = gql`
  query Posts {
    posts {
      body
      createdAt
      _id
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getPost($postId: ID!) {
    post(postId: $postId) {
      _id
      body
      createdAt
      likes
      name
    }
  }
`;
