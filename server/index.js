const express = require('express');
const app = express();
const path = require('path');


// serve static assets from /public folder - bundle.js, imgs, css etc
app.use(express.static(path.join(__dirname, '../public')))

app.use( (req, res, next) => {
    console.log(`${req.method} request for   ${req.path}`)
    next();
});

app.get("/*", (req,res) => {
    res.sendFile(path.resolve("public/index.html"));
});

app.listen(3000,()=>{
    console.log('running on port 3000');
});