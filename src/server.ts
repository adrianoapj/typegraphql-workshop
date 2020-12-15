import 'reflect-metadata';
import './utils/connection';

import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import CategoryResolver from './graphql/category/CategoryResolver';
import VideoResolver from './graphql/video/VideoResolver';
import AuthorResolver from './graphql/author/AuthorResolver';

async function bootstrap() {

  const schema = await buildSchema({
    resolvers: [CategoryResolver, VideoResolver, AuthorResolver]
  });

  const server = new ApolloServer({ schema });

  server.listen({ port: 4100 }, () => console.log('running'));
}

bootstrap();