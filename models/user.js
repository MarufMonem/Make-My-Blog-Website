var mongoose                = require("mongoose");
var passportLocalMongoose   = require("passport-local-mongoose");
//Schema setup
var userSchema = new mongoose.Schema({
    username:       String,
    image:          String,
    email:          {type:String, unique:true},
    password:       String,
    age:            Number,
    admin:          {type:Boolean, default:false},
    gender:         String,
    description:    String,
    public:         {type: Boolean, default:true},
    subscribed:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        }
    ],
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "blog",
        }
    ],
    comment:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "blog",
        }
    ],
    
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });
module.exports= mongoose.model("user",userSchema);