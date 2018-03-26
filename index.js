const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);





//process.env.PORT is for heroku, 5000 is the local server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
