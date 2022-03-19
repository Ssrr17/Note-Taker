const express = require("express");
// const fs = require('fs');
const apiRoute = require('./routes/apiRoute')
// const htmlRoute = require('./routes/htmlRoute')

//To instantiate the server
const app = express();
const PORT = process.env.PORT || 3000

// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
// // parse incoming JSON data
// app.use(express.json());

app.use('/api', apiRoute);
// app.use('/', htmlRoute);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});