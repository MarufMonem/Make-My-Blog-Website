//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var middleware  = require("../middleware");

//new blog page form
router.get("/new", middleware.isloggedIn, function(req,res){
res.send("Reached");
});

//update blog page form
router.get("/update/:id", middleware.isBlogOwner, function(req,res){
res.send("Reached");
});

// Registration page
router.delete("/delete/:id",middleware.isBlogOwner,  function(req,res){

});

//show all blogs page
router.get("/show", function(req,res){
res.send("Reached");
});

// like a particular blog req
router.put("/like/:id", middleware.isloggedIn, function(req,res){

});

//create a new blog req 
router.post("/", middleware.isloggedIn, function(req,res){

});

//update old blog req
router.put("", middleware.isBlogOwner ,function(req,res){

});

module.exports = router;