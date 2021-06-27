import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql';

dotenv.config();

const { PORT } = process.env;

const Port = PORT || 8080;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(Port).then(({ url }) => console.log(`Server running ${url}`));