//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var middleware  = require("../middleware");

//create a new user req
router.get("/create", function(req,res){

});

//Delete the user
router.get("/delete/:id", function(req,res){

});

//Update the user req
router.get("/update/:id", function(req,res){

});

//Show users profile (containing user info, liked blogs and new post)
router.get("/:id", function(req,res){

});

module.exports = router;