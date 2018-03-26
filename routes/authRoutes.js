const passport = require('passport');

module.exports = app => {
  //so when a user clicks login, they'll be sent to this route, and the authentication process will begin for GoogleOAuth (as seen from above)
  app.get('/auth/google', passport.authenticate('google', {
    //scope means give me access to the user's profile info and email
    scope: ['profile', 'email']
  }));

  //turn the code that you get back after the "choose an email part" in the url into an actual profile
  app.get('/auth/google/callback', passport.authenticate('google'));
};
