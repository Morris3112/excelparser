const models = require('../../models')

module.exports = {
  register (req, res) {
  models.User.create({
        email: req.body.email,
        password: req.body.password
      }).then(function(user) {
        res.json(user)
      },function(err){
        res.status(400).send({
          error: 'It works'
        })
      })
      }
    }
