# MongoDB
https://docs.mongodb.com/manual/reference/method/

- use different drivers for different languages

## Atlas
- Database as a service
- Store data in the cloud
- Handles replication: maintain redundant copies of data in different servers(within a cluster) to increase availability

## Filter in MongoDB Compass
- use `{"id" : "101"}` for specific filters.
- use `{"amount" : {"gte" : 10, "lt" : 100} }` for range filters, in this case it means 10 <= amount < 100.

## Using MongoDB Shell(after connected with MongoDB Atlas)
- Show databases
```shell
show dbs
```
- load .js file(with database(s)) into the Atlas Cluster
```shell
load(<.js file name>)
```
