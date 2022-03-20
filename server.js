const express = require('express');
const notesArray = [];
const { notes } = require('./db/db.json');
const PORT = process.env.PORT || 3001;

const app = express();// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// function noteId(id, notesArray) {
//     const result = notesArray.filter((notes) => notes.id === id)[0];
//     return result;
// }
// function createNote (body, notesArray) {
//     console.log(body);
//     // our function's main code will go here!
  
//     // return finished code to post route for response
//     return body;
//   }


  app.post('/api/notes', (req, res) => {
//     // set id based on what the next index of the array will be
//     req.body.id = notes.length.toString();
  
//     res.json(req.body);
//   });


app.get('/api/notes', (req, res) => {
    res.json(notes);
  });
  app.get('/api/notes/:id', (req, res) => {
    const result = noteId(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

  

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });





// const express = require("express");
// const fs = require("fs");
// const path = require('path');

// // Initialize express app
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Setup data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(__dirname));

// //Require routes file
// require('./routes/htmlNote');
// require('./routes/noteRoute');
// // Setup listener
// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
// });  
