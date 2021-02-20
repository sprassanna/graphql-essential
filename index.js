import express from 'express';
const { graphqlHTTP } = require('express-graphql');
import schema from './schema';
import resolvers from './resolver';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

class Friend {
    constructor(id,{firstName,lastName,gender,language,email}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
    }
} 

const friendDataBase = {};

const root =  resolvers;

app.use(`/graphql`, graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));