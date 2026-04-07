const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

const typeDefs = require('../graphql/schema')
const resolvers = require('../graphql/resolvers')

const server = new ApolloServer({
  typeDefs,      // ✅ MUST include Mutation
  resolvers      // ✅ MUST include Mutation resolver
})

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
  })

  console.log(`🚀 Server running at ${url}`)
}

startServer()