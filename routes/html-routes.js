// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    console.log("HERE");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    console.log("HERE");
    res.sendFile(path.join(__dirname, "../public/signup/.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  //for getting individual members pages by url

  app.get("/:handle", function(req, res) {
    if (req.user) {
      res.render(path.join(__dirname, "handlebars page relating to handle"));
    };
  });

  // for searching a city / town on google maps?
  app.get("/searchByLocation", function(req, res) {
    if (req.user) {
      res.sendFile(path.join(__dirname, "...."))
    };
  });

  //shows results when looking by city
  app.get("/searchByLocation/results", function(req, res) {
    if (req.user) {
      res.render(path.join(__dirname, "....handlebars page showing search results from /searchbylocation page" ))
    };
  });

  app.get("/searchByExperience/results", function (req, res) {
    if(req.user) {
      res.render(path.join(__dirname, ".....handlebars page showing search results from /searchByExperience"))
    }
  })


};
