const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

//passport, use GoogleStrategy (understand that users can authenticate themselves in our app)
//callbackURL is the route that the user will be sent to after they grant permission
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);


//so when a user clicks login, they'll be sent to this route, and the authentication process will begin for GoogleOAuth (as seen from above)
app.get('/auth/google', passport.authenticate('google', {
  //scope means give me access to the user's profile info and email
  scope: ['profile', 'email']
}));

//turn the code that you get back after the "choose an email part" in the url into an actual profile
app.get('/auth/google/callback', passport.authenticate('google'));





//process.env.PORT is for heroku, 5000 is the local server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
