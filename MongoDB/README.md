# MongoDB
https://docs.mongodb.com/manual/reference/method/

command line(ubuntu): 
---------------------------
sudo service mongodb start

mongo

shell script:
---------------------------
show dbs //show all databases on local host

show collections //show all collections in current databases

use //create new database or change directory to the exsiting database

db //current database


db.collection.insertOne() //collection of data, table, name is d. example: db.collection.insertOne({_id:1,name: "Pen", price : 2.2})

db.collection.insertMany()

db.collection.find() //read

db.collection.find(query or projection) //read with specific query, query using {}, 1 and 0 means yes or no

db.collection.updateOne() //add feature to the one of the collection. example: db.products.updateOne({_id:1},{$set: {stock:32}})

db.collection.deleteOne()

db.collection.deleteMany()

Relationships:
---------------------------
example:
db.products.insert(
  {
  _id:3,
  name:"Rubber",
  price:1.30,
  stock:43,
  reviews: [
    {
      authorNames: "Sally",
      rating: 5,
      reviews: "Best rubber ever!"
    }
  ]
  }
)

