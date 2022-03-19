const path = require("path");
const router = require("express").Router();

// Setup the /api/notes get route
router.get("/db", function(req, res) {
    let results = notes
    // Read the db.json file and return all saved notes as JSON.
    res.json(results);
});

module.exports = router;