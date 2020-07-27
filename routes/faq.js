//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var faq         = require("../models/faq");
var middleware  = require("../middleware");

//show all faq
router.get("/", function(req,res){

});

//Create a new faq form page
router.get("/new", middleware.isAdmin, function(req,res){

});

//update faq form page
router.get("/update", middleware.isAdmin, function(req,res){

});


//new faq req
router.post("/create", middleware.isAdmin, function(req,res){

});

//faq update req
router.put("/update/:id", middleware.isAdmin, function(req,res){

});

//faq delete req
router.delete("/delete/:id", middleware.isAdmin, function(req,res){

});

module.exports = router;