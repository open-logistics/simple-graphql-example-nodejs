import { GraphQLServer } from 'graphql-yoga'
import Schema from './schema';

export {
  Schema
};

export function start() {
  const server = new GraphQLServer({
    schema: Schema
  });

  return new Promise(resolve => server.start(resolve));
}
