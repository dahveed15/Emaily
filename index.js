const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

//passport, use GoogleStrategy (understand that users can authenticate themselves in our app)
passport.use(new GoogleStrategy());

//process.env.PORT is for heroku, 5000 is the local server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
