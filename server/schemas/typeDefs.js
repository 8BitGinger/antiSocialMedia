const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
    
  }

  type Posts {
    _id: ID
    body: String
    createdAt: String
    name: String
    likes:[Likes]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    posts: [Posts]!
    post(postId: ID!): Posts
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Likes {
    _id: ID
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createPost(body: String!): Posts
    deletePost(postId: ID!): Posts
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
    addLike(postId: ID!): Posts
  }
`;

module.exports = typeDefs;
