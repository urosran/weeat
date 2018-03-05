/// API
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const user = mongoose.model("user");

app.get("/*", (req, res) => {
    res.sendStatus(404).end();
})

app.post('/db/new-user', (req, res) => {
    user.create({
        firstName: req.body.firstName,
        preferences: req.body.preferences
    })
});

module.exports = app;