/// API
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const User = mongoose.model("User");
// const userId = require('./index.js').profile;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// app.post('/new-user', (req, res) => {
//     user.create({
//         firstName: req.body.firstName,
//         preferences: req.body.preferences
//     })
// });

app.post("/interests", (req, res) => {
    // console.log(JSON.parse(req.body.interests))
    const interests = req.body.interests;
    User.update({ _id: '5add5601c1518c001443def4' }, { $set: { preferences: interests } }, () => {
		console.log(("added interets"));
	});
});
app.post("/usdanUsers", (req, res) => {
    User.find({ 'location': 'usdan' }, function (err, people) {
        if (err) return  new Error(err);
        console.log(people);
        res.json({
            currentUsers:people
        })
        // Prints "Space Ghost is a talk show host".
        // console.log('%s %s is a %s.', person.name.first, person.name.last,
        //   person.occupation);
      });
});

app.post("/addToUsdan", (req, res) => {
    // console.log(JSON.parse(req.body.interests))
    const location = req.body.location;
    User.update({ _id: '5add5601c1518c001443def4' }, { $set: { location: location } }, () => {
		console.log(("added location " + location));
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