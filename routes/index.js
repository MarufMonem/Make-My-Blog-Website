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
res.render("login");
});

//login req
router.post("/login", function(req,res){
    res.render("login");
});
    
// Registration page
router.get("/register", function(req,res){
    res.render("register");
});

// Registration page req
router.post("/register", function(req,res){
    res.send("Reached");
});

//Faq page
router.get("/faq", function(req,res){
    res.render("faq");
});

// Update information page
router.get("/updates", function(req,res){
res.send("Reached");
});

//logout handler
router.get("/logout", middleware.isloggedIn ,function(req,res){
res.send("Reached");
});

module.exports = router;