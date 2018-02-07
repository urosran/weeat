const express = require('express');
const app = express();
const path = require('path');


// serve static assets from /public folder - bundle.js, imgs, css etc
app.use(express.static(path.resolve('/public')))

app.get("/*", (req,res) => {
    res.sendFile(path.resolve("public/index.html"))
} )

app.listen(3000,()=>{console.log('running on port 3000')})