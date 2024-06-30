const mongoose = require("mongoose");

module.exports = connection = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(process.env.DB, connectionParams);
        console.log("connected to database.");
    } catch (error) {
        console.log(error, "could not connect database.");
    }
};
//
const connection = require("./db");
const express = require ("express");
const app = express();
 connection();

 app.use(express.json());
 //  ....