//node code

//import modules
//require() is the predefined function, used to import the modules.
//@express      @body-parser        @cors       @mongodb
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongodb = require("mongodb");



//create the rest object
//rest object, used to develop the rest services
//GET, POST, PUT, DELETE, HEAD, OPTIONS,.....
//we will prepare rest object with the help of express
const app = express();
//where "app" is the rest object
//where "app" object, used to develop the rest services


//enable the cors policy
app.use( cors() );



//set the "JSON" as Communication language between "client and server"
app.use( bodyparser.json() );



//read the "json" coming from client
app.use(bodyparser.urlencoded({extended:false}));


//create the client reference to connect to mongodb
const sambaIT = mongodb.MongoClient;
//where "sambaIT" is the reference.
//where "sambaIT" used to connect to mongodb database.



//create the GET Request
app.get("/products",(req,res)=>{
    sambaIT.connect("mongodb+srv://admin:admin@cluster0.3sghp.mongodb.net/MERN?retryWrites=true&w=majority",
                    (err,connection)=>{
            if(err) throw err;
            else{
                const mydb = connection.db("MERN");
                mydb.collection("products").find().toArray((err,array)=>{
                    if(err) throw err;
                    else{
                        res.send(array);
                    }
                });
            }
    });
});


//assign the PORT Number
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started");
});