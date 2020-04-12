const {MongoClient} = require('mongodb');

// database connection
const URL= "mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb";
const dbName= "react-node3";
let db;


MongoClient.connect(URL,(err, client)=>{
    console.log("database connected successfully");
    db= client.db(dbName);
});