'use strict';
const express = require('express');
const logger = require('morgan');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers = require('./lib/resolvers');
const db = require('./db/index');
const Courses = require('./models/course');
const Students = require('./models/student');

const app = express();
const PORT = process.env.PORT || 3000;

// Definir el Squema
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8');
const schema = makeExecutableSchema({ typeDefs, resolvers });
app.use(logger('dev'));
app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

db.authenticate()
  .then(() => {
    // db.sync();
    console.log('Connected to database');
    app.listen(PORT, () => {
      console.log(`Server is listen at http://localhost:${PORT}/api`);
    });
  })
  .catch((e) => {
    console.log(error);
    process.exit(1);
  });
