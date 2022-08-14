const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
    "Fetch a specific module, provided a module's ID"
    module(id: ID!): Module!
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse! 
  }

  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    "Thumbnail will contain a URL string"
    thumbnail: String
    length: Int
    modulesCount: Int
    numberOfViews: Int
    description: String
    modules: [Module!]!
  }

  type Module {
    id: ID!
    title: String!
    content: String
    videoUrl: String
    length: Int
  }

  "The author creates a learning track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
