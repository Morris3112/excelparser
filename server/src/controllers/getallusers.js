const models = require('../../models')

module.exports = {
getall(req, res) {
  models.User.findAll({}).then(function(users) {
    console.log("asking for all users");
    console.log(users.email);
    res.json(users);
  })
}
}
