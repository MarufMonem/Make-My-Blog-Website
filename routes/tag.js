//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var tag         = require("../models/tag");
var middleware  = require("../middleware");

//tag create
router.post("/create", middleware.isAdmin, function(req,res){

});

//tag delete
router.delete("/delete", middleware.isAdmin, function(req,res){

});


module.exports = router;