const { ApolloServer, gql } = require("apollo-server-lambda");

// TODO: how to deploy to same url if express, otherwise how to handle lambda?

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

exports.gqlHandler = server.createHandler();
