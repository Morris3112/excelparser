const authcontroller = require('./controllers/authcontroller')

module.exports = function (app) {
  app.post('/register',
  authcontroller.register)
}
