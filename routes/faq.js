//intializing variables
var express     = require("express");
var router      = express.Router();
var user        = require("../models/user");
var faq         = require("../models/faq");
var middleware  = require("../middleware");



//Faq page
router.get("/", function(req,res){
    faq.find({}, function(err, allFaq){
        if(err){
            console.log("Couldnt get FAQ");
        }else{
            res.render("faq",{allFaq:allFaq});
        }
    })
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
                    console.log("FAQ added: " + savedFaq);
                    req.flash("success","FAQ Created.");
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
    faq.findById(req.params.id, function(err, foundFaq){
        if (err) {
            req.flash("error","Couldnt remove FAQ " + err);
        } else {
            req.flash("success","FAQ has been removed.");
            foundFaq.remove();
        }
        res.redirect("back");
    });
});

module.exports = router;