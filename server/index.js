const { resolve } = require('path');
const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/graphql_crud');
const db = mongoose.connection;

const resolvers = require('./schema/resolvers');

const options = { port: 4000 };
const server = new GraphQLServer({
  typeDefs: resolve(__dirname, './schema/typeDefs.graphql'),
  resolvers,
  context: { db },
});

server.start(options, () => console.log(`Server is running on http://localhost:${options.port}`));
