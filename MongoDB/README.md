# MongoDB
https://docs.mongodb.com/manual/reference/method/

- use different drivers for different languages

## Atlas
- Cloud Database as a service
- Store data in the cloud
- Handles replication: maintain redundant copies of data in different servers(within a cluster) to increase availability

## Compass
- Visual database representation

## Filter in MongoDB Compass
- use `{id : "101"}` for specific filters.
- use `{amount : {"gte" : 10, "lt" : 100} }` for range filters, in this case it means 10 <= amount < 100.

## Using MongoDB Shell(after connected with MongoDB Atlas)
- Show databases
```MongoDB
show dbs
```
- Load .js file(with database(s)) into the Atlas Cluster
```MongoDB
load(<.js file name>)
```
- Use a database
```MongoDB
use <database name>
```
- Show collections in a database
```MongoDB
show collections
```
- Show data within a collection
```MongoDB
db.<collection name>.find().pretty()
```
## Basic CRUD Operations in MongoDB Shell 
- `""` is required in Shell but not in Compass

### InsertOne
```MongoDB
db.<collection name>.insertOne({attr1 : data1, attr2 : data2, ...})
```
### InsertMany
```MongoDB
db.<collection name>.insertMany(
[
{"attr1" : data1, "attr2" : data2, ...},
{"attr1" : data1, "attr2" : data2, ...},
{"attr1" : data1, "attr2" : data2, ...}
]
)
```
- **ordered insertMany** will stop insert once it encounters an error(e.g. duplicate keys) since it runs sequentially
- Making **unordered insertMany** will insert all good documents and leave the errored ones out
```MongoDB
db.<collection name>.insertMany(
[
{"attr1" : data1, "attr2" : data2, ...},
{"attr1" : data1, "attr2" : data2, ...},
{"attr1" : data1, "attr2" : data2, ...}
], { "ordered": false }
)
```

### Query
```MongoDB
/* db.<collection name>.find(<query condition>).pretty() */
db.<collection name>.find({"attr1" : data1, "attr2" : data2, ...}).pretty()
```
- If an attribute contains a nested collection, using `.` to specify
```MongoDB
db.<collection name>.find({"attr1.nestedATTR1" : data1, "attr2" : data2, ...}).pretty()
```
- If an attribute contains an array, to find if the data entry of that attribute contains an element
```MongoDB
db.<collection name>.find({"attr1" : arrayElement, "attr2" : data2, ...}).pretty()
```
- If an attribute contains an array, to find if the data entry is an array of specific elements
```MongoDB
db.<collection name>.find({"attr1" : [arrayElement1, arrayElement2], "attr2" : data2, ...}).pretty()
```
- If an attribute contains an array, to find if the data entry contains the array element and it is at a specific index of that array
```MongoDB
db.<collection name>.find({"attr1.0" : arrayElement1, "attr2" : data2, ...}).pretty()
/* "attr1.0" : arrayElement1  means arrayElement1 is at index 0 of attr1*/
```
### Projection with Queries
- Using a second parameter in `find()`, `0` for not display, `1` for display
```MongoDB
/* db.<collection name>.find(<query condition>, <projection>).pretty() */
db.<collection name>.find({"attr1" : data1, "attr2" : data2, ...},  {"attr1" : 0, "attr2" : 1}).pretty()
```

### Updates
- Using a second parameter in `updateOne()` to update one document
```MongoDB
db.<collection name>.updateOne(
  {<query condition>},
  {
  $set: {
  <update condition>
  }
  }
)
```
- `$set` set one or more attributes(if not exist) or update one or more attributes(if exist)
```MongoDB
/*example*/
db.movieDetails.updateOne(
  { 'title' : 'The Martian'},
  {
  $set: {
    'poster' : 'good'
  }
  }
)
```
