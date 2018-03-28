const express = require('express');
const mongoose = require('mongoose');

//load up the user model
require('./models/User');

require('./services/passport');


mongoose.connect('mongodb://localhost/emaily-dev')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

const app = express();

require('./routes/authRoutes')(app);





//process.env.PORT is for heroku, 5000 is the local server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
