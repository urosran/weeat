'use strict';
require("dotenv").config();
require("./models");
const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.connect(process.env.DATABASE);
let db = mongoose.connection;


const startDbPromise = new Promise(function(resolve, reject){
    db.on('open', resolve);
    db.on('error', console.error.bind(console, "connection error: "))
})

console.log(chalk.yellow("oppening connection to DB"));

async function startDB() {
    await startDbPromise;
    console.log(chalk.blue('MongoDB connectio opened!'));
}

module.exports = startDB;

// startDbPromise.then(()=>{console.log(chalk.blue('MongoDB connectio opened!'))})

// module.exports = startDbPromise;