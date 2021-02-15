import express from 'express';
const { graphqlHTTP } = require('express-graphql');
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = { friend: () => {
    return {
        "id" : 12345,
         "firstName": "Prassanna",
         "lastName":"S",
          "gender":"male",
          "email":"na"
    }
    



}  
};

app.use(`/graphql`, graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));