// EXPRESS
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

require('dotenv').config()

//Import the mongoose module
var mongoose = require('mongoose')

//Set up default mongoose connection
var mongoDB = process.env.DB_PATH
mongoose.connect(mongoDB, { useNewUrlParser: true })
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise
//Get the default connection
var db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(port, () => {
  console.log(`Listening on port ${port} `)
})
