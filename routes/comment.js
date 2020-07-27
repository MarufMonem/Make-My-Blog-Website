//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var blog        = require("../models/blog");
var middleware  = require("../middleware");

//create comment req
router.post("/create/:blogId",middleware.isloggedIn, function(req,res){

});

//delete comment req (both the blog owner and comment owner can delete the comment)
router.delete("/delete/:blogId", middleware.isCommentOwner, function(req,res){

});

//update comment req
router.put("/update/:blogId", middleware.isCommentOwner, function(req,res){

});

module.exports = router;