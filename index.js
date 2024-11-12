const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const mongoose = require("mongoose");
const User = require("./app/models/UserModel");

mongoose.connect('mongodb://127.0.0.1:27017/Express-zadanie1');

const userRouter = require('./app/router/userRouter');

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

/* Routes */
app.use("/", userRouter);

app.listen(8080, function () {
    console.log("Serwer Node.js działa");
});