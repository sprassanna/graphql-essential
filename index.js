import express from 'express';
const { graphqlHTTP } = require('express-graphql');
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});
 

app.use(`/graphql`, graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.listen(11111, () => console.log('Running server on port localhost:11111/graphql'));