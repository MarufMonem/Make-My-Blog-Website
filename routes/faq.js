//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var faq         = require("../models/faq");
var middleware  = require("../middleware");



//Faq page
router.get("/", function(req,res){
    
});

//update faq form page
router.get("/update", middleware.isAdmin, function(req,res){
    res.send("Reached");
});


//new faq req
router.post("/create", middleware.isAdmin, function(req,res){
    faq.create(req.body.faq, function(err, newFaq){
        if(err){
            console.log("FAQ wasnt added");
        }else{
            
            newFaq.save(function(err, savedFaq){
                if(err){
                    console.log("Couldnt save FAQ");
                }else{
                    console.log("FAQ added");
                    req.flash("success","FAQ created.");
                    res.redirect("back");
                }
            });
        }
    })
});

//faq update req
router.put("/update/:id", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

//faq delete req
router.delete("/delete/:id", middleware.isAdmin, function(req,res){
    res.send("Reached");
});

module.exports = router;