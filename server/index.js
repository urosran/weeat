require('dotenv').config();
const bodyParser = require('body-parser');
// import session from 'express-session';

const express = require('express');
const app = express();
const path = require('path');
const startDb = require('./db');
const mongoose = require('mongoose');
const User = mongoose.model("User");
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;

// serve static assets from /public folder - bundle.js, imgs, css etc
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '../public')))

let fbProfile;

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
// app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
     secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Configure the Facebook strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Facebook API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new Strategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL:'https://weeat2.herokuapp.com/login/facebook/return'
    },
    function(accessToken, refreshToken, profile, cb) {
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    fbProfile = profile;
    console.log(fbProfile);
    return cb(null, profile);
}));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.path}`)
    next();
});

app.get('/login/facebook',
    passport.authenticate('facebook'));

app.get('/login/facebook/return',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
        module.exports.profile = parseInt(fbProfile.id);

        // Successful authentication, redirect home.
        let id = parseInt(fbProfile.id);
        let fName = fbProfile.displayName.split(" ")[0];
        let lName = fbProfile.displayName.split(" ")[1];
        console.log("db stufzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz" + fName);
        const user = new User({
            id: id,
            firstName: fName,
            lastName : lName
          });

        User.findOne({ id:id }, (err, existingUser) => {
            if (err) {consol.log("EROORRRRR______________"); return }
            if (existingUser) {
                console.log("USER FOUNDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
                console.log(existingUser)
                req.session.profile = existingUser;
              return res.redirect('/usdan');
            }
            user.save((err) => {
              if (err) { return }
              console.log("savedddddddddddddddddddddddddddddddddddddddddddddd")
              req.session.profile = existingUser;
              return res.redirect('/createAcc');
            });
          });
    }
);

app.use("/db", require("./dbroutes.js"));

app.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
       res.render('profile', { user: req.user });
    }
);

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("public/index.html"));
});


async function startServer() {
    await startDb()
    await app.listen(process.env.PORT)
    console.log(`running on port ${process.env.PORT}`);
}
startServer();
