// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function (app) {

  //for getting individual members pages by id
  app.get("/users/id/:id", function (req, res) {
    
    db.User.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbMember => {
        // return the member
        res.render("profile", {user: req.user, member: dbMember.dataValues});
      })
      .catch(err => {
        res.json(err);
      });
  });

//for getting individual members pages by username
  app.get("/users/name/:username", (req, res) => {
    db.User.findOne({
      where: {
        username: req.params.username
      }
    })
      .then(dbMember => {
        res.render("profile", dbMember.dataValues);
      })
      .catch(err => {
        res.send(err);
      })
  });

  

};
