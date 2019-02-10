import { makeExecutableSchema } from 'graphql-tools';
import TypeDefinitions from './type-definitions';
import Resolvers from './resolvers';

export default makeExecutableSchema({
  typeDefs: TypeDefinitions,
  resolvers: Resolvers
});
