//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var blog        = require("../models/blog");
var middleware  = require("../middleware");

//create comment req
router.post("/create/:blogId",middleware.isloggedIn, function(req,res){
    res.send("Reached");
});

//delete comment req (both the blog owner and comment owner can delete the comment)
router.delete("/delete/:blogId/:id", middleware.isCommentOwner, function(req,res){
    res.send("Reached");
});

//update comment req
router.put("/update/:blogId/:id", middleware.isCommentOwner, function(req,res){
    res.send("Reached");
});

module.exports = router;