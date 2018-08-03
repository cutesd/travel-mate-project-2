// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  
  app.get("/api/members/:id", (req, res) => {
    db.User.findAll()
    .then(data => {
      res.json(data);
    })
    .catch (err => {
      res.send(err);
    });
  });

  app.get("/api/members", (req, res) => {
    db.User.findAll({
      from: User
    })
    .then(data => {
      res.json(data);
    })
    .catch (err => {
      res.send(err);
    });
  });

  app.get("members/:handle", (req, res) => {
    db.User.findOne({
      where: {
        handle: req.params.handle
      }
    })
      .then(dbMember => {
        res.json(dbMember);
      })
      .catch(err => {
        res.send(err);
      })
  });

  app.get("/api/city/:location", (req, res) => {
    db.User.findAll({
      where: {
        location: req.params.location
      }
    })
    .then(data => {
      res.json(data);
    })
    .catch (err => {
      res.send(err);
    });
  });

  app.get("/api/city/:location/:activities", (req, res) => {
    console.log("city", req.params.location);
    db.User.findAll({
      where: {
        location: req.params.location,
        activities: req.params.activities
      }
    })
    .then(data => {
      res.json(data);
    })
    .catch (err => {
      res.send(err);
    });
  });

  app.get("/api/experiences/:activities", (req, res) => {
    db.User.findAll({
      where: {
        activities: req.params.activities
      }
    })
    .then(data => {
      res.json(data);
    })
    .catch (err => {
      res.send(err);
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      location: req.body.location,
      about: req.body.about,
      interests: req.body.interests,
      activities: req.body.activities,
      profilePhoto: req.body.profilePhoto,
      coverPhoto: req.body.coverPhoto
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

};
