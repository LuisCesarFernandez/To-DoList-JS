const express = require('express')
const config = require('./config')
const user = require('./modules/user/user-rutas')
const morgan = require('morgan')

const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//config
app.set('port', config.app.port)

//routes
app.use('/api/user', user)


module.exports = app;