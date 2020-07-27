var mongoose                = require("mongoose");
var passportLocalMongoose   = require("passport-local-mongoose");
//Schema setup
var blogSchema = new mongoose.Schema({
    title:              String,
    blogNumber:         Number,
    dateCreated:        {type:Date, default: Date.now},
    dateModified:       {type: Date, default:null},
    description:        String,
    likeCount:          Number,
    featured:           {type: Boolean, default:false},
    approved:           {type: Boolean, default:false},
    ageRestriction:     {type: Boolean, default:false},
    public:             {type: Boolean, default:false},
    images:[
        {
            type: String
        }
    ],
    comment:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment",
        }
    ],
    
});

module.exports= mongoose.model("blog",blogSchema);