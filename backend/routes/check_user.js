const express = require("express");
const router = express.Router();
const controller = require("../controllers/check_user_controller");
//render user home page only if user is logged in
router.get("/", controller.index);

module.exports = router;
