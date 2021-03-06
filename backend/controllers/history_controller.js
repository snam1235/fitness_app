const dateModel = require("../models/date.js");

module.exports.index = function (req, res) {
  res.setHeader("Cache-Control", "no-cache, no-store");
  if (!req.user) {
    req.flash("message", "Login to access this page");
    res.redirect("/");
  } else {
    // res.render("history");
  }
};

module.exports.show_history = function (req, res) {
  const date = dateModel
    .findOne({ email: req.user.email, date: req.body.Date })
    .populate("breakfast")
    .populate("lunch")
    .populate("dinner")
    .exec(function (error, days) {
      if (error) {
        return res.status(401).end();
      } else {
        if (days != null) {
          if (req.body.Meal == "breakfast") {
            return res.json({ message: days.breakfast });
          } else if (req.body.Meal == "lunch") {
            return res.json({ message: days.lunch });
          } else {
            return res.json({ message: days.dinner });
          }
        } else {
          return res.json({ message: "fail" });
        }
      }
    });
};
