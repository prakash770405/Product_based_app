require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./Models/Product");


const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connected to Product_based_app!'));



app.post("/api/products/add", async (req, res) => {

    try {

        const { name, price } = req.body;

        const product = new Product({
            name: name,
            price: price
        });

        console.log(name,price);
        await product.save();

        res.status(201).json({
            message: "Product added successfully",
            product: product
        });

    } catch (error) {

        res.status(500).json({
            message: "Error adding product",
            error: error.message
        });

    }

});

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port=${process.env.PORT}`);
})