//INITIALIZE ALL THE VARIABLES
var express                 = require("express"),
    app                     = express(),
    mongoose                = require("mongoose"),
    flash                   = require("connect-flash"),
    localStrategy           = require("passport-local"),
    methodOverride          = require("method-override"),
    passport                = require("passport"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    bodyParser              = require("body-parser");

// THE SCHEMAS    
var blog                    = require("./models/blog");
var comment                 = require("./models/comment");
var user                    = require("./models/user");
var faq                     = require("./models/faq");
var tag                     = require("./models/tag");
var update                  = require("./models/update");
var advertisement           = require("./models/advertisement");

//THE ROUTES
var blogRoutes              = require("./routes/blog"),
    indexRoutes             = require("./routes/index"),
    adminRoutes             = require("./routes/admin"),
    userRoutes              = require("./routes/user"),
    commentRoutes           = require("./routes/comment"),
    faqRoutes               = require("./routes/faq"),
    taqRoutes               = require("./routes/tag"),
    updateRoutes            = require("./routes/update");

mongoose.set('useUnifiedTopology', true); //removing deprication errors
mongoose.connect("mongodb://localhost/blogWebsite" ,{ useNewUrlParser: true });
// mongoose.connect("mongodb+srv://eCommerce:16101078@ecommerce.gpjnj.mongodb.net/eCommerce?retryWrites=true&w=majority" ,{ useNewUrlParser: true });

//MAKING ALL DIFFRENT PACKAGES AND FEATURES USEABLE IN THE APP    
app.use(bodyParser.urlencoded({ extended: true })); //get form data
app.set("view engine", "ejs"); //not write ejs every time
app.use(express.static(__dirname + "/public/stylesheets/")); //where the stulesheets are lcoated
app.use(methodOverride("_method")); //Making sure put and delete work
app.use(flash());//for flash messages

app.use(require("express-session")({
    //secret code to encode and decode the username and password
    //can be anything you want
    secret: "Maruf Monem blog Website",
    resave: false,
    saveUninitialized:false
}));

//Making sure that express uses passport
app.use(passport.initialize()); 
app.use(passport.session());

//this line is telling passport to use the user authenticate method
//which is given to the userSchema
// passport.use(new localStrategy(user.authenticate()));

passport.use(user.createStrategy()); 
passport.serializeUser(user.serializeUser()); //encode
passport.deserializeUser(user.deserializeUser()); //decode

//middleware for pasing logged in user information.
app.use(function(req,res,next){
    res.locals.currentUser  = req.user;
    res.locals.error        = req.flash("error");
    res.locals.success      = req.flash("success");
    res.locals.secondary    = req.flash("secondary");
    next(); // for running the next part of the code
});

//MAKING ROUTES A BIT SIMPLER TO WRITE
app.use("/",indexRoutes);
app.use("/user",userRoutes);
app.use("/admin",adminRoutes);
app.use("/blog",blogRoutes);
app.use("/comment",commentRoutes);
app.use("/faq",faqRoutes);
app.use("/tag",tagRoutes);
app.use("/update",updateRoutes);

app.listen(5501, "127.0.0.1", function () {
    console.log("Local blog app has started");
})

// app.listen(process.env.PORT,process.env.IP, function(){
//     console.log("Your blog website has started");
// })