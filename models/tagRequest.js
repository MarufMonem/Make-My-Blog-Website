var mongoose                = require("mongoose");
var passportLocalMongoose   = require("passport-local-mongoose");
//Schema setup
var tagRequestSchema = new mongoose.Schema({
    tag:  String,
});

module.exports= mongoose.model("tagRequest",tagRequestSchema);