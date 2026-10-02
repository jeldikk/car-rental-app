import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { makeExecutableSchema } from "@graphql-tools/schema";
import type { DocumentNode } from "graphql";
import { Application, json } from "express";
import { carTypeDefs } from "../graphql/typedefs/car.typedefs";
import { carResolvers } from "../graphql/resolvers/car.resolvers";

export async function startApolloServer(app: Application) {
  // we use typeDefs to define out Graphql objects
  // types, queries, and mutations are defined here
  // resources are defined here
  const typeDefs: DocumentNode[] = [carTypeDefs];

  // we use resolvers to define our business logic, how data is retrieved from the data sources
  const resolvers: any = [carResolvers];

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start();
  app.use("/graphql", json(), expressMiddleware(apolloServer));
}
