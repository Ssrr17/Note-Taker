const fs = require('fs');
const path = require('path');
const { notes } = require('../db/db');
const express = require('express')
const router = require('express').Router();
//  const router = express();

 
        // // API ROUTES
        // // ========================================================
    
        // // Setup the /api/notes get route
        // router.get("/api/notes", function(req, res) {
        //     // Read the db.json file and return all saved notes as JSON.
        //     res.send("hello");
        // });

        // // Setup the /api/notes post route
        // router.post("/api/notes", function(req, res) {
        //     // Receives a new note, adds it to db.json, then returns the new note
        //     let newNote = req.body;
        //     notes.push(newNote);
        //     updateDb();
        //     return console.log("Added new note: "+newNote.title);
        // });

        // // Retrieves a note with specific id
        // router.get("/api/notes/:id", function(req,res) {
        //     // display json for the notes array indices of the provided id
        //     res.json(notes[req.params.id]);
        // });

        // // Deletes a note with specific id
        // router.delete("/api/notes/:id", function(req, res) {
        //     notes.splice(req.params.id, 1);
        //     updateDb();
        //     console.log("Deleted note with id "+req.params.id);
        // });

        // VIEW ROUTES
        // ========================================================


    

module.exports = router