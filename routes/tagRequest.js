//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var tag         = require("../models/tag");
var middleware  = require("../middleware");

//tag create form
router.get("/create", middleware.isAdmin, function(req,res){

});

//crating the tag req
router.post("/new", middleware.isAdmin, function(req,res){

});


module.exports = router;