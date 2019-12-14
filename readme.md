

# PROJECT DAVID - HAPI JS BOILERPLATE
  This boilerplate is made on top of [DEFRA/hapi-web-boilerplate](https://github.com/DEFRA/hapi-web-boilerplate). The project uses handlebars templating engine, uses mongodb as database and webpack 4 for bundling combined with gulp and grunt for managing task. 

  ### THIS IS STILL WIP, OPEN TO ANYONE TO MAKE THIS BETTER :)

# Environment variables
(Be sure to describe any environment variables here by maintaining a list like this)

| name     | description      | required | default |            valid            | notes |
|----------|------------------|:--------:|---------|:---------------------------:|-------|
| NODE_ENV | Node environment |    yes    |         | development,test,production |       |
| PORT     | Port number      |    yes    | 8082    |                             |       |

# Prerequisites

Node v8+


# (Checklist)
Once you clone this repository you'll need to make a few changes before you're ready to start:

- [ ] Add service name and description to the README above
- [ ] Check over the content of the 404 and 500 error pages and tailor to suit
- [ ] Update the `package.json` with the name, description and any git urls and authors etc.  
- [ ] Update the build status badges to your new project

# Running the application

First build the application using:

`$ gulp start`

this will spinup nodemon and do the bundling. 

`$ gulp prod`

this will spinup the server using pm2

## What is this?

A simple hapi-based enterprise  boilerplate.
 [sajan.dev](https://sajan.dev).

Based on:

- [hapijs](https://github.com/hapijs/hapi) - The framework & core plugins like `joi`, `vision` etc.
- [standardjs](http://standardjs.com/) - Linting
- [pm2](https://github.com/Unitech/pm2) - Process manager
- [webpack](https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1)
- [youtube](https://www.youtube.com/watch?v=Mn6aj4kY-j8)


## Getting started

Clone this repo and run through the checklist above.

Check the server is running by pointing your browser to `http://localhost:8082`

## Project structure

Here's the default structure for your project files.

* **server**
  * **controllers** (This folder contains all the controllers)
  * **devasset** (At time of development assests should be put in this dir based on category, Check scss/main and js/index)
  * **helpers** (Helper folder which contains helpers hooked with models)
  * **models** (mongodb schema)
  * **public**  (This folder is publicly served)
    * **static** (Put all static assets in here)
    * **build** (This contains the build output files (js/css etc.) and is not checked-in)
  * **routes**
  * **utils** (utility functions and other files )
  * **views** (Contains layout and partials for handlebar)
  * config.js (All the config for development,test and production)
  * index.js (Exports a function that creates a server)
* **test**
* README.md
* index.js (startup server)

## Config

The configuration file for the server is found at `server/config.js`.
This is where to put any config and all config should be read from the environment.

A table of environment variables should be maintained in this README.

## Plugins

hapi has a powerful plugin system and all server code should be loaded in a plugin.

Plugins live in the `server/plugins` directory.

## Logging

The [good](https://github.com/hapijs/good) and [good-console](https://github.com/hapijs/good-console) plugins are included and configured in `server/plugins/logging`

The logging plugin is only registered in when `NODE_ENV=development`.

Error logging for production should use errbit.

## Views

The [vison](https://github.com/hapijs/vision) plugin is used for template rendering support.

The template engine used is handlebars  with support for view caching, layouts, partials and helpers.

## Static files

The [Inert](https://github.com/hapijs/inert) plugin is used for static file and directory handling in hapi.js.
Put all static assets in `server/public/static`.

Any build output should write to `server/public/build`. This path is in the `.gitignore` and is therefore not checked into source control.

## Routes

Incoming requests are handled by the server via routes. 
Each route describes an HTTP endpoint with a path, method, and other properties.

Routes are found in the `server/routes` directory and loaded using the `server/plugins/router.js` plugin.

Hapi supports registering routes individually or in a batch.
Each route file can therefore export a single route object or an array of route objects.

A single route looks like this:

```js
{
  method: 'GET',
  path: '/hello-world',
  options: {
    handler: (request, h) => {
      return 'hello world'
    }
  }
}
```

There are lots of [route options](http://hapijs.com/api#route-options), here's the documentation on [hapi routes](http://hapijs.com/tutorials/routing)

## Testing

[lab](https://github.com/hapijs/lab) and [code](https://github.com/hapijs/code) are used for unit testing.

See the `/test` folder for more information.

## Linting

[standard.js](http://standardjs.com/) is used to lint both the server-side and client-side javascript code.

It's defined as a build task and can be run using `npm run lint`.
