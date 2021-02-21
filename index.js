import express from 'express';
const { graphqlHTTP } = require('express-graphql');
import { schema } from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});
 

app.use(`/graphql`, graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.listen(14001, () => console.log('Running server on port localhost:14001/graphql'));