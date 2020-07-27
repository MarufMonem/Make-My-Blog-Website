//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var faq         = require("../models/faq");
var middleware  = require("../middleware");

//Admin homepage
router.get("/", middleware.isAdmin, function(req,res){

});

//pending reequest
router.get("/pendingBlogs", middleware.isAdmin, function(req,res){

});

//active blogs
router.get("/activeBlogs", middleware.isAdmin, function(req,res){

});

//tag requests
router.get("/allTags", middleware.isAdmin, function(req,res){

});

//tag requests
router.get("/tagRequest", middleware.isAdmin, function(req,res){

});

//all users page
router.get("/allUsers", middleware.isAdmin, function(req,res){

});

//show all blogs
router.get("/allBlogs", middleware.isAdmin, function(req,res){

});

//show all faq
router.get("/allFaq", middleware.isAdmin, function(req,res){

});

//show all updates
router.get("/allUpdates", middleware.isAdmin, function(req,res){

});

//show all advertisements
router.get("/allAdvertisements", middleware.isAdmin, function(req,res){

});


module.exports = router;