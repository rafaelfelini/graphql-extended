import {
  GraphQLSchema,
  FragmentDefinitionNode,
  OperationDefinitionNode,
  GraphQLError,
} from 'graphql'

/**
 * Data that must be available at all points during query execution.
 *
 * Namely, schema of the type system that is currently executing,
 * and the fragments defined in the query document
 */
export type ExecutionContext = {
  schema: GraphQLSchema;
  fragments: {[key: string]: FragmentDefinitionNode};
  rootValue: mixed;
  contextValue: mixed;
  operation: OperationDefinitionNode;
  variableValues: {[key: string]: mixed};
  errors: Array<GraphQLError>;
}
