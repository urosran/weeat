/// API
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const user = mongoose.model("user");

app.get("/*", (req, res) => {
    res.sendStatus(404).end();
})

app.post('/new-user', (req, res) => {
    user.create({
        firstName: req.body.firstName,
        preferences: req.body.preferences
    })
});

app.post("/users", (req, res) => {

    user.find({}, function (err, users) {
        res.send(users);
    });

});

module.exports = app;

/*

async getusers() {
    let data = await fetch("/db/info", {
        method: "POST"
    });

    data = await data.json();
}


*/