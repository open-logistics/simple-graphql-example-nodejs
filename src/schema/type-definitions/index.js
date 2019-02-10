import Types from './types';
import Mutation from './mutation';
import Query from './query';

export default [
  Types,
  Mutation,
  Query
]
  .join('\n');
