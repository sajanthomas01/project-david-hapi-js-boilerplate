const hapi = require('@hapi/hapi')
const config = require('./config')
const chalk = require('chalk')

async function createServer () {
  console.log(chalk.white.bgGreen.bold('Running in '+config.app.env));

  // Create the hapi server
  const server = hapi.server({
    port: config.app.port,
    routes: {
      validate: {
        options: {
          abortEarly: false
        }
      }
    }
  })

  // Register the plugins
  await server.register(require('./plugins/mongoose'))
  await server.register(require('@hapi/inert'))
  await server.register(require('./plugins/views'))
  await server.register(require('./plugins/router'))
  await server.register(require('./plugins/error-pages'))
  await server.register(require('./plugins/logging'))
  await server.register(require('blipp'))

  return server
}

module.exports = createServer
