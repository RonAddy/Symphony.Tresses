const MongoClient = require('mongodb').MongoClient;

 // Connection URL
const url = 'mongodb://localhost:27017/';
 
// Database Name
const dbName = 'symphony_tresses_dev';

let User;
let Product;
let User_Product;

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to symphony_tresses db");
  const db = client.db(dbName);

  db.createCollection("user", function(err, res){
    User = res;
    console.log('User model',res);
  });

  db.createCollection("product", function(err, res){
    Product = res;
  });

  db.createCollection("user_product", function(err, res){
    User_Product = res;
  });
 
  // client.close();
});


module.exports = {
  User,
  Product,
  User_Product
}