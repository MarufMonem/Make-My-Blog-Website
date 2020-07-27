//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var ad         = require("../models/advertisement");
var middleware  = require("../middleware");

//tag create
router.post("/create", middleware.isAdmin, function(req,res){

});

//tag create
router.put("/update/:id", middleware.isAdmin, function(req,res){

});

//tag delete
router.delete("/delete/;id", middleware.isAdmin, function(req,res){

});


module.exports = router;