require('dotenv').config()

//Import the mongoose module
var mongoose = require('mongoose')

//Set up default mongoose connection
mongoose.connect(`${process.env.URL}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
})
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise
//Get the default connection
const db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// User model => users collection
const User = mongoose.model('User', {
  name: String,
  email: String,
})

module.exports = {
  getHello: (req, res) => {
    res.send({
      message: 'Hello World',
    })
  },
  getUsers: async (req, res) => {
    res.send({
      message: 'List of all users',
      users: await User.find(),
    })
  },
  register: (req, res) => {
    res.send({
      message: 'register',
    })
  },
  login: (req, res) => {
    res.send({
      message: 'login',
    })
  },
  profile: (req, res) => {
    res.send({
      message: 'profile',
    })
  },
}
