import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';
import express from 'express';

dotenv.config();

const { PORT } = process.env;
const Port = PORT || 8080;
const app = express();

app.use(express.static('public'));

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(Port, () => {
    console.log(`🚀  Server ready at http://localhost:4000${ server.graphqlPath }`);
});