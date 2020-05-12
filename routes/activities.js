const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");

// GET all activities
router.get("/all", function (req, res, next) {
  knex("activities")
    .select()
    .then(function (activities) {
      res.status(200).render("index", {
        activities: activities,
      });
    })
    .catch(function (error) {
      next(error);
    });
});

// *** GET single activity *** //
router.get("/activity/:id", function (req, res, next) {
  knex("activities")
    .where("id", req.params.id)
    .first()
    .then(function (user) {
      res.status(200).json(user);
    })
    .catch(function (error) {
      next(error);
    });
});

// *** add activity *** //
router.post("/activity", function (req, res, next) {
  console.log(req.body);
  knex("activities")
    .insert(req.body, "id")
    .then(function (activityID) {
      knex("activities").where("id", activityID).first();
    })
    .then(function (activity) {
      res.json(activity);
      res.send("Activity Added");
    })
    .catch(function (error) {
      next(error);
    });
});

// *** update activity *** //
router.put("/:id", function (req, res, next) {
  if (req.body.hasOwnProperty("id")) {
    return res.status(422).json({
      error: "You cannot update the id field",
    });
  }
  knex("activities")
    .where("id", req.params.id)
    .update(req.body)
    .then(function () {
      return knex("activities").where("id", req.params.id).first();
    })
    .then(function (user) {
      res.status(200).json(user);
    })
    .catch(function (error) {
      next(error);
    });
});

// *** delete activity *** //
router.delete("/:id", function (req, res, next) {
  knex("activities")
    .where("id", req.params.id)
    .first()
    .then(function (user) {
      knex("activities")
        .where("id", req.params.id)
        .del()
        .then(function () {
          res.status(200).json(user);
        })
        .catch(function (error) {
          next(error);
        });
    })
    .catch(function (error) {
      next(error);
    });
});

module.exports = router;
