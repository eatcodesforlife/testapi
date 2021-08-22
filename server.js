const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('test.json')
const middleware = jsonServer.defaults()

const port = process.env.PORT || 5000


server.use(middleware)
server.use(router)

server.listen(port)