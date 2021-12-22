var apm = require('elastic-apm-node').start({
  serviceName: 'gt-node',
  
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://188.166.242.21:30337',
})

// Require the framework and instantiate it
var fastify = require('fastify')({
  logger: true
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
