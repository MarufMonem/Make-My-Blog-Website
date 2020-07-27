//intializing variables
var express     = require("express");
var router      = express.Router();
var passport    = require("passport");
var user        = require("../models/user");
var middleware  = require("../middleware");

//homepage
router.get("/", function(req,res){
    res.render("index");
});

//login page
router.get("", function(req,res){

});

// Registration page
router.get("", function(req,res){

});

//Faq page
router.get("", function(req,res){

});

// Update information page
router.get("", function(req,res){

});

//logout handler
router.get("", middleware.isloggedIn ,function(req,res){

});

module.exports = router;