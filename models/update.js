var mongoose                = require("mongoose");
var passportLocalMongoose   = require("passport-local-mongoose");
//Schema setup
var updateSchema = new mongoose.Schema({
    title:  String,
    content:String,
    image:  String,
    dateCreated:    {type:Date, default: Date.now}, 
});

module.exports= mongoose.model("update",updateSchema);