require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./Models/Product");

const app = express();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected!'));

app.listen(process.env.PORT, () => {
    console.log("Server is listeninig");
})