const noteModel = require('../models/Notes.js');
const express = require('express');
const noteRoutes = express.Router();

// Create a new Note
// POST /notes
noteRoutes.post('/notes', async (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    try {
        const note = new noteModel({
            noteTitle: req.body.content.noteTitle,
            noteDescription: req.body.content.noteDescription,
            priority: req.body.content.priority,
            dateAdded: req.body.content.dateAdded,
            dateUpdated: req.body.content.dateUpdated
        });

        const savedNote = await note.save();
        res.status(201).send(savedNote);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    }
});

// Retrieve all Notes
// GET /notes
noteRoutes.get('/notes', async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.status(200).send(notes);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    }
});

// Retrieve a single Note with noteId
// GET /notes/:noteId
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try {
        const note = await noteModel.findById(req.params.noteId);
        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(200).send(note);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    }
});

// Update a Note with noteId
// PUT /notes/:noteId
noteRoutes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    try {
        const updatedNote = await noteModel.findByIdAndUpdate(
            req.params.noteId,
            {
                noteTitle: req.body.content.noteTitle,
                noteDescription: req.body.content.noteDescription,
                priority: req.body.content.priority,
                dateUpdated: req.body.content.dateUpdated || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ /g, '/')
            },
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(200).send(updatedNote);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    }
});

// Delete a Note with noteId
// DELETE /notes/:noteId
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    try {
        const deletedNote = await noteModel.findByIdAndDelete(req.params.noteId);

        if (!deletedNote) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(200).send({ message: "Note deleted successfully!" });
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    }
});

module.exports = noteRoutes;
