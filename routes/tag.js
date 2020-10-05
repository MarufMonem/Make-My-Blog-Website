//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var tag         = require("../models/tag");
var middleware  = require("../middleware");

//tag create 
router.post("/new", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

//tag delete req
router.delete("/delete/:id", middleware.isAdmin, function(req,res){
    res.send("Reached");
});


module.exports = router;