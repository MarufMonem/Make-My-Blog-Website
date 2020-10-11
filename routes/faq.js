//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var faq         = require("../models/faq");
var middleware  = require("../middleware");



//Faq page
router.get("/", function(req,res){
    res.render("faq");
});

//update faq form page
router.get("/update", middleware.isAdmin, function(req,res){
res.send("Reached");
});


//new faq req
router.post("/create", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

//faq update req
router.put("/update/:id", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

//faq delete req
router.delete("/delete/:id", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

module.exports = router;