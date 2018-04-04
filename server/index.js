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

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("public/index.html"));
});

// startDb().then(()=>{
//     app.listen(process.env.PORT, ()=>{
//         console.log(`running on port ${process.env.PORT}`);
//     });
//     app.listen(process.env.PORT, function() {
//         console.loog("RUNNING ON PORT", process.env.PORT);
//     })
// });

async function startServer() {
    await startDb()
    await app.listen(process.env.PORT)
    console.log(`running on port ${process.env.PORT}`);
}
startServer();