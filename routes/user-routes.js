// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function (app) {

  app.get("/getuser", (req, res) => {
    res.json(req.user);
  });

  //for getting individual members by id
  app.get("/users", function (req, res) {

    var query = {};
    if (req.query.member_id) {
      query.id = req.query.member_id;
    } else if (req.query.member_name) {
      query.username = req.query.member_name;
    }

    db.User.findOne({
      where: query
    })
      .then(dbMember => {
        res.render("profile", {
          user: req.user,
          member: dbMember.dataValues,
          helpers: {
            ifCond: function (v1, v2, options) {
              if (v1 !== v2) {
                return options.fn(this);
              }
              return options.inverse(this);
            }
          }
        });
        // res.json(dbMember);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // DELETE route for deleting ratings
  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbMember => {
      res.json(dbMember);
    });
  });

  // PUT route for updating ratings
  app.put("/api/users", function (req, res) {
    db.User.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(dbUser => {
        res.json(dbUser);
      });
  });


};
