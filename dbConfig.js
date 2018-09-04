const MongoClient = require('mongodb').MongoClient;

 // Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = ' twilight_tresses_dev';

//User Model
let User;

//Product Model
 let Product;

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  console.log(db);

  db.createCollection("user", function(err, res){
    User = res;
  });

  db.createCollection("product", function(err, res){
    Product = res;
  });
 
  client.close();
});


module.exports = {
  User,
  Product
}