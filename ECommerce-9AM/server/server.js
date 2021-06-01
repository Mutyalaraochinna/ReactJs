
//import the node modules
//require() is the predefined function used to import the node modules
const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken");
const express_async_handler = require("express-async-handler");
const dotenv = require("dotenv");
const bcryptjs = require("bcryptjs");
const bodyparser = require("body-parser");
const Product = require("./model/productModel");


//to develop "rest api's" we should create "rest" object
//we must dependent on "express" to develop "rest" object
const app = express();
//where "app" is the rest object
//by using "app" object we will develop rest services like GET,POST,PUT,DELETE,.....


//enable cors policy
//providing the "communication" between different "ports" called as "cors" policy
app.use(cors());


//set the json as MIME Type
app.use(bodyparser.json());


//read the data from client application
app.use(bodyparser.urlencoded({extended:false}));


//make the availability of .env file
dotenv.config();

//connect to mongodb database by using mongoose module
mongoose.connect("mongodb+srv://admin:admin@cluster0.3sghp.mongodb.net/ecommercem?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology:true,
    useCreateIndex:true
});

//handle the server side error
app.use((err,req,res,next)=>{
    res.status(500).send({"err":err.message})

});

//create the GET Request
app.get("/api/products",express_async_handler(async(req,res)=>{
    const products = await Product.find();
    res.send(products);
}));

app.get("/api/products/:id", express_async_handler(async(req,res)=>{
    const product = await Product.findOne({"_id":new mongodb.ObjectID(req.params.id)});
    if(product){
        res.status(200).send(product);
    }else{
        res.status(400).send({"message":"no product available"});
    }
}));


//assign the port number
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started");
});