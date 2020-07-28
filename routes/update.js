//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var update         = require("../models/update");
var middleware  = require("../middleware");

//update create form
router.get("/create", middleware.isAdmin, function(req,res){

});

//update create req
router.post("/new", middleware.isAdmin, function(req,res){

});

//tag delete req
router.delete("/delete/:id", middleware.isAdmin, function(req,res){

});


module.exports = router;