# MongoDB
https://docs.mongodb.com/manual/reference/method/

- use different drivers for different languages

## Atlas
- Database as a service
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
## Basic CRUD Operations in MongoDB
### InsertOne
```MongoDB
db.<collection name>.insertOne({attr1 : data1, attr2 : data2, ...})
```
### InsertMany
```MongoDB
db.<collection name>.insertMany(
[
{attr1 : data1, attr2 : data2, ...},
{attr1 : data1, attr2 : data2, ...},
{attr1 : data1, attr2 : data2, ...}
]
)
```
