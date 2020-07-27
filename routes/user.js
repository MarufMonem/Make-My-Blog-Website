//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var blog        = require("../models/blog");
var middleware  = require("../middleware");

//create a new user req
router.get("/create", middleware.isloggedIn, function(req,res){

});

//Delete the user
router.get("/delete/:id", middleware.isloggedIn, function(req,res){

});

//Update the user req
router.get("/update/:id", middleware.isloggedIn, function(req,res){

});

//Show users profile (containing user info, liked blogs and new post)
router.get("/:id", middleware.isloggedIn, function(req,res){

});

module.exports = router;