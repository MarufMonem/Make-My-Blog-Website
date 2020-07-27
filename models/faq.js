var mongoose                = require("mongoose");
var passportLocalMongoose   = require("passport-local-mongoose");
//Schema setup
var faqSchema = new mongoose.Schema({
    title:  String,
    content:String,
    image:  String,
});

module.exports= mongoose.model("faq",faqSchema);