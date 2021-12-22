var apm = require('elastic-apm-node').start({
  serviceName: 'gt-node',
  
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://188.166.242.21:30337',
})

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  let os = require("os");
  return { hello: os.hostname() }
})


// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000,'0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
