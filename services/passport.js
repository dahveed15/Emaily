const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//give me access to the user model defined in User.js
const User = mongoose.model('users');

//passport, use GoogleStrategy (understand that users can authenticate themselves in our app)
//callbackURL is the route that the user will be sent to after they grant permission
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      //find a user by using its google id
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            //we already have a record with the given profile ID
          } else {
            //we don't have a user record with this ID, make a new record!
            new User({ googleId: profile.id }).save();
          }
        });


    }
  )
);
