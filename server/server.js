const path = require('path')
const express = require('express')
const routes = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1/routes', routes)

module.exports = server
