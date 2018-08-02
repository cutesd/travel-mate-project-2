// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function (app) {

    // GET route for getting all of the ratings sent by user
    app.get("/api/ratings", function (req, res) {
        var query = {};
        if (req.query.member_id) {
            query.MemberId = req.query.member_id;
        } else if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }

        // 1. Add a join here to include all of the Users to these ratings
        db.Rating.findAll({
            where: query,
            include: [db.User]
        })
            .then(dbRating => {
                res.json(dbRating);
            })
            .catch(err => {
                res.json(err);
            })
    });

    // Get route for retrieving a single Rating
    app.get("/api/ratings/:id", function (req, res) {
        // 2. Add a join here to include the User who wrote the Rating
        db.Rating.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(dbRating => {
            console.log(dbRating);
            res.json(dbRating);
        });
    });

    // POST route for saving a new Rating
    app.post("/api/ratings", function (req, res) {
        db.Rating.create(req.body).then(function (dbRating) {
            res.json(dbRating);
        });
    });

    // DELETE route for deleting ratings
    app.delete("/api/ratings/:id", function (req, res) {
        db.Rating.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbRating) {
            res.json(dbRating);
        });
    });

    // PUT route for updating ratings
    app.put("/api/ratings", function (req, res) {
        db.Rating.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbRating) {
                res.json(dbRating);
            });
    });

};

