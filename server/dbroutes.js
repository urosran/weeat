/// API
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const user = mongoose.model("user");



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
app.get("/*", (req, res) => {
    res.sendStatus(404).end();
})

app.post("/*", (req, res) => {
    res.sendStatus(404).end();
})
module.exports = app;

/*

async getusers() {
    let data = await fetch("/db/info", {
        method: "POST"
    });

    data = await data.json();
}


*/