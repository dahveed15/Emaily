const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String
});

//create a collection called users
mongoose.model('users', userSchema);
