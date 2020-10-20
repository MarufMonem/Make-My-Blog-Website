//intializing variables
var express = require("express");
var router = express.Router();
var user = require("../models/user");
var update = require("../models/update");
var middleware = require("../middleware");


//user side update page
router.get("/", function (req, res) {
    update.find({}, function (err, allUpdate) {
        if (err) {
            console.log("Couldnt get Updates");
        } else {
            res.render("update", {allUpdate:allUpdate});
        }
    })

});



//New Updates
router.post("/new", middleware.isAdmin, function (req, res) {
    update.create(req.body.update, function (err, newUpdate) {
        if (err) {
            console.log("Update wasnt added");
        } else {
            newUpdate.save(function (err, savedUpdate) {
                if (err) {
                    console.log("Couldnt save Update");
                } else {
                    console.log("Update added: " + savedUpdate);
                    req.flash("success", "New update Created.");
                    res.redirect("back");
                }
            });
        }
    })
});

//edit update form page
router.get("/edit/:id", middleware.isAdmin, function(req,res){
    update.findById(req.params.id, function(err, foundUpdate){
        if(err){
            console.log("Couldnt get content");
            req.flash("error","Couldnt remove update " + err);
        }else{
            res.render("adminUpdateEdit",{foundUpdate:foundUpdate});
        }
    })
});


//Updates, update req
router.put("/update/:id", middleware.isAdmin, function (req, res) {
    update.findByIdAndUpdate(req.params.id, req.body.update, function (err, updatedContent) {
        if (err) {
            console.log("Couldnt update FAQ");
            req.flash("error", "Couldnt update " + err);
        } else {
            req.flash("success", "Content has been updated.");
            res.redirect("/admin/updates");
        }
    })
});

//Update delete req
router.delete("/delete/:id", middleware.isAdmin, function (req, res) {
    update.findById(req.params.id, function (err, foundUpdate) {
        if (err) {
            req.flash("error", "Couldnt remove update " + err);
        } else {
            req.flash("success", "Update has been removed.");
            foundUpdate.remove();
        }
        res.redirect("back");
    });
});



module.exports = router;