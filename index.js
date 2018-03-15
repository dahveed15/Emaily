const express = require('express');
const app = express();

//creating a new route handler
app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

//process.env.PORT is for heroku, 5000 is the local server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
