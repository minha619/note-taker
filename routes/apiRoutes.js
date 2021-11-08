const { application } = require('express');
const db = require('../db/db');


module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.json(db);
    });


    app.post('/api/notes', (req, res) => {
        db.push(req.body);
        res.json(true);
    });

    app.delete('/api/notes/:id', (req, res) => {

    });

};