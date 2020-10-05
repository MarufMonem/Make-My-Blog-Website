//intializing variables
var express     = require("express");
var router      = express.Router();
var passport    = require("passport");
var user        = require("../models/user");
var middleware  = require("../middleware");

//homepage
router.get("/", function(req,res){
    res.render("index");
});

//login page
router.get("/login", function(req,res){
    res.render("login");
});

// Registration page
router.get("/register", function(req,res){
    res.render("register");
});

//login req
router.post("/login", passport.authenticate("local", {
    successRedirect: "/", //if the login was successful
    failureRedirect: "/login", // if it wasnt
    failureFlash: true
}) , function(req, res){
});
    
// Registration page req
router.post("/register", function(req,res){
    // res.send("Reached");
    // res.send(req.body.user);
    user.register(
        new user(req.body.user), req.body.password, function(err, newUser){
            if(err){
                console.log("Error creating user" + req.body.user);
                req.flash("error",err.message);
                res.redirect("/register");
            }else{
                console.log("1");
                passport.authenticate("local")(req,res, function(err){
                    console.log("2");
                    if(err){
                        console.log("*******UNSUCCESSFUL USER CREATION********");
                        req.flash("error",err.message);
                        res.redirect("/register");
                    }else{
                        console.log("*******SUCCESSFUL USER CREATION********");
                        req.flash("success", "Welcome, " + newUser.username);
                        res.redirect("/");
                    }
                });

            }
        }
    )
});

//Faq page
router.get("/faq", function(req,res){
    res.render("faq");
});

// Update information page
router.get("/updates", function(req,res){
    res.send("Reached");
});

//logout handler
router.get("/logout", middleware.isloggedIn ,function(req,res){
    res.send("Reached");
});

module.exports = router;