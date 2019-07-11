# mongoDB

command line: 

sudo service mongodb start
mongo

shell script:
show dbs //show all databases on local host
show collections //show all collections in current databases
use //create new database
db //current database

db.collection.insertOne() //collection of data, table, name is arbitrary

db.collection.insertMany()

db.collection.find() //read

db.collection.find(query) //read with specific query
