const express = require('express');
const app = express();
const path = require('path');
const startDb = require('./db');
const mongoose = require('mongoose');

// serve static assets from /public folder - bundle.js, imgs, css etc
app.use(express.static(path.join(__dirname, '../public')))

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.path}`)
    next();
});

app.use("/db", require("./dbroutes.js"));

app.get("/*", (req,res) => {
    res.sendFile(path.resolve("public/index.html"));
});

startDb.then(()=>{
    app.listen(8080,()=>{
        console.log('running on port 8080');
    });
});


