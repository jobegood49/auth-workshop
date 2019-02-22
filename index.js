// EXPRESS
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
const users = require('./middlewares/users')

app.get('/', users.getHello)
app.get('/users', users.getUsers)
app.post('/register', users.register)
app.post('/login', users.login)
app.post('/profile', users.profile)

app.listen(port, () => {
  console.log(`Listening on port ${port} `)
})
