//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var tag         = require("../models/tag");
var middleware  = require("../middleware");

//tag create req
router.post("/new", middleware.isAdmin, function(req,res){

});

//tag delete req
router.delete("/delete/:id", middleware.isAdmin, function(req,res){

});


module.exports = router;