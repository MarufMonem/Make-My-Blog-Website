//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var ad          = require("../models/advertisement");
var middleware  = require("../middleware");

//ad create req
router.post("/create", middleware.isAdmin, function(req,res){

});

//ad update req
router.put("/update/:id", middleware.isAdmin, function(req,res){

});

//ad delete req
router.delete("/delete/:id", middleware.isAdmin, function(req,res){

});


module.exports = router;