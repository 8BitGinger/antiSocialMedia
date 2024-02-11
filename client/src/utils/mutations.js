import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const ADD_LIKE = gql`
  mutation addLike($postId: String!, $like: String!) {
    addLike(postId: $postId, likes: $like) {
      _id
      body
      createdAt
      likes
      name
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      body
      createdAt
      _id

      name
    }
  }
`;

export const DELETE_POST_MUTATION = gql`
  mutation deletePost($postID: ID!) {
    deletePost(postId: $postID)
  }
`;
