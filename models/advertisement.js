var mongoose                = require("mongoose");
var passportLocalMongoose   = require("passport-local-mongoose");
//Schema setup
var advertisementSchema = new mongoose.Schema({
    companyName:    String,
    payment:        String,
    image:          String,
});

module.exports= mongoose.model("advertisement",advertisementSchema);