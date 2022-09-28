const { ApolloServer, gql } = require("apollo-server-lambda");

// TODO: serverless webpack

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
