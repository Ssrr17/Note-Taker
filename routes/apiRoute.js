const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});

router.post("/notes", (req, res) => {
  store
    .writeNote(req.body)
    .then((note) => {
      return res.json(note);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});
// router.post("/notes", (req, res) => {
//   // set id based on what the next index of the array will be
//   req.body.id = notesArray.length.toString();

//   res.json(req.body);
// });

// router.get("/notes/:id", (req, res) => {
//   const result = findById(req.params.id, notes);
//   if (result) {
//     console.log(result);
//     res.json(result);
//   } else {
//     res.send(404);
//   }
// });

module.exports = router;
