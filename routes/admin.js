//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var faq         = require("../models/faq");
var middleware  = require("../middleware");

//Admin homepage
router.get("/", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

//faq page for admins
router.get("/faq", middleware.isAdmin, function(req,res){
    faq.find({}, function(err, allFaq){
        if(err){
            console.log("Couldnt get FAQ");
        }else{
            res.render("adminFaq",{allFaq:allFaq});
        }
    })
});

//pending reequest
router.get("/pendingBlogs", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

//active blogs
router.get("/activeBlogs", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

//tag requests
router.get("/allTags", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

//tag requests
router.get("/tagRequest", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

//all users page
router.get("/allUsers", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

//show all blogs
router.get("/allBlogs", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

//show all faq
router.get("/allFaq", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

//show all updates
router.get("/allUpdates", middleware.isAdmin, function(req,res){
res.send("Reached");
});

//show all advertisements
router.get("/allAdvertisements", middleware.isAdmin, function(req,res){
res.send("Reached");
});


module.exports = router;