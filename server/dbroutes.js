/// API
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const User = mongoose.model("User");
// const userId = require('./index.js').profile;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// app.get('/id', function(req, res, next) {
//     var someAttribute = req.session.profile;
//     console.log(someAttribute);
//     res.json(someAttribute);
//   });


app.post("/interests", (req, res) => {
    // console.log(JSON.parse(req.body.interests))
    const interests = req.body.interests;
    console.log(req.user.id)
    console.log(req + " =zzzzzzzzzzzzzzzzzzzzzzS");
    User.update({ _id: req.session.profile._id }, { $set: { preferences: interests } }, () => {
        console.log(("added interets"));
        console.log((req.session.profile ));

	});
});
app.get("/usdanUsers", (req, res) => {
    User.find({ 'location': 'usdan' }, function (err, people) {
        if (err) return  new Error(err);
        console.log(people);
        res.json({
            currentUsers:people
        })
      });
});
//adding locations on click
app.post("/addToUsdan", (req, res) => {
    // console.log(JSON.parse(req.body.interests))
    const location = req.body.location;
    User.update({ _id:req.session.profile._id  }, { $set: { location: location } }, () => {
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