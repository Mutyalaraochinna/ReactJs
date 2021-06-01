const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    "_id":{type:ObjectID,required:true},
    "name":{type:String,required:true},
    "brand":{type:String,required:true},
    "price":{type:Number,required:true},
    "qty":{type:Number,required:true},
    "countInStock":{type:Number,required:true},
    "rating":{type:Number,required:true},
    "description":{type:String,required:true},
    "image":{type:String,required:true}
});

const Product = mongoose.model("Product",productSchema);


module.exports = Product;