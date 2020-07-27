var mongoose                = require("mongoose");
var passportLocalMongoose   = require("passport-local-mongoose");
//Schema setup
var commentSchema = new mongoose.Schema({
    dateCreated:    {type:Date, default: Date.now},
    dateModified:   {type: Date, default:null},
    content:        String,
    userName:       String,
    userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        },  
});

module.exports= mongoose.model("comment",commentSchema);