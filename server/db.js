'use strict';

require("dotenv").config();

const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.connect(process.env.DATABASE);
let db = mongoose.connection;

// require("./models");

const startDbPromise = new Promise(function(resolve, reject){
    db.on('open', resolve);
    db.on('error', console.error.bind(console, "connection error: "))
})

console.log(chalk.yellow("oppening connection to DB"))

startDbPromise.then(()=>{console.log(chalk.blue('MongoDB connectio opened!'))})

module.exports = startDbPromise;