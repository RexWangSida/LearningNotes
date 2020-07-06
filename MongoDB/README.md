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
```shell
show dbs
```
- Load .js file(with database(s)) into the Atlas Cluster
```shell
load(<.js file name>)
```
- Use a database
```shell
use <database name>
```
- Show collections in a database
```shell
show collections
```
- Show data within a collection
```shell
db.<collection name>.find().pretty()
```
## Basic CRUD Operations in MongoDB
