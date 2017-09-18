const createuser = require('./controllers/createuser')
const users = require('./controllers/getallusers')

module.exports = function (app) {
  app.post('/register',
  createuser.register)
}

module.exports = function(app) {
  console.log("does it work?")
  app.get('/users',
  users.getall)
}
