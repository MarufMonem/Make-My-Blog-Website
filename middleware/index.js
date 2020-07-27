var campground = require("../models/campground");
var comment = require("../models/comment");
var middlewareObj = {};

// middlewareObj.checkCampgroundOwnership = function (req, res, next) { //Middleware to check authorization

//     if (req.isAuthenticated()) { //is the person logged in
//         campground.findById(req.params.id, function (err, foundCamp) {
//             if (err) {
//                 req.flash("error", "Campground not found");
//                 res.redirect("back");
//             } else {
//                 if (foundCamp.author.id.equals(req.user._id)) {
//                     //we dont want it to do this all the time this should
//                     //be dynamic so move on to the next function
//                     //res.render("campgrounds/edit", {campground: foundCamp});
//                     next();
//                 } else {
//                     req.flash("error", "You dont have permission to do that!");
//                     res.redirect("back");
//                 }
//             }
//         });
//     } else {
//         req.flash("error", "You need to be logged in!");
//         res.redirect("/login");
//     }
// };


// //Middleware to check authorization
// middlewareObj.checkCommentOwnership = function (req, res, next) {
//     if (req.isAuthenticated()) { //is the person logged in
//         comment.findById(req.params.comment_id, function (err, foundComment) {
//             if (err) {
//                 req.flash("error", "Comment not found");
//                 res.redirect("back");
//             } else {
//                 if (foundComment.author.id.equals(req.user._id)) {
//                     //we dont want it to do this all the time this should
//                     //be dynamic so move on to the next function
//                     //res.render("campgrounds/edit", {campground: foundCamp});
//                     next();
//                 } else {
//                     req.flash("error", "You dont have permission to do that!");
//                     res.send("You are not authorized");
//                 }
//             }
//         });
//     } else {
//         //if not logged in 
//         req.flash("error", "You need to be logged in!");
//         res.redirect("/login");
//     }
// };
//logged in checker
middlewareObj.isloggedIn = function isloggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You need to logged in to do that!");
    res.redirect("/login");
}


middlewareObj.isAdmin = function isAdmin(req, res, next) {
    if (req.isAuthenticated()) {
        if(req.user.admin === true){
            console.log("PERSON IS ADMIN******************")
            return next();
        }else{
            console.log("PERSON IS NOT ADMIN******************")
            req.flash("error", "You are not an admin");
            res.redirect("back");
        }
    }else{
        res.redirect("/login");
    }
}
module.exports = middlewareObj;

