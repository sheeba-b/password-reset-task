

require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;
app.listenport, () => console.log()`Listening on port ${port}...'));
//...
onst passwordReset = require("./routes/passwordReset");
const users = require("./routes/users");
const connection = require("./db");
//.....

app.use(express.json());

app.use("/api/users", users);
app.use("/api/password-reset", passwordReset);
//....

