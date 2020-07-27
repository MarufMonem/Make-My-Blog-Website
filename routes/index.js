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
router.get("/login", function(req,res){

});

// Registration page
router.get("/register", function(req,res){

});

//Faq page
router.get("/faq", function(req,res){

});

// Update information page
router.get("/updates", function(req,res){

});

//logout handler
router.get("/logout", middleware.isloggedIn ,function(req,res){

});

module.exports = router;