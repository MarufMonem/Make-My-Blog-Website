var mongoose                = require("mongoose");
var passportLocalMongoose   = require("passport-local-mongoose");
//Schema setup
var tagSchema = new mongoose.Schema({
    tagName:  String,
});

module.exports= mongoose.model("tag",tagSchema);