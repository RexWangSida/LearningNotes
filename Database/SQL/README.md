# SQL(Structured Query Language)
- descriptive words
- non-procedural language

## Data Retrieval
- **Using `SELECT` (columns) and `FROM` (table)**
- Table Example: Products
  | prod_name | prod_id | prod_price |
  |-----------|---------|------------|
  | Shampoo   |P01      | 12         |
  |Toothpaste |P02      | 13         |
  |Deodorant  |P03      | 20         |
  |Toothbrush |P04      | 5          |
```sql
/* retrive the column of prod_name */
SELECT prod_name
FROM Products;
```
```sql
/* retrive the columns of prod_name, prod_id */
SELECT prod_name, prod_id
FROM Products;
```

```sql
/* retrive the all columns */
SELECT *
FROM Products;
```
## Table Creation
- **Using `CREATE TABLE` to create table**
- Built-in Types:
  - **INT** or **INTEGER**
  - **FLOAT** or **REAL**
  - **CHAR(n)**
```sql
CREATE TABLE Student(
    SID CHAR(8),
    Name CHAR(20),
    Email CHAR(20),
    Age INTEGER,
    GPA REAL
);
```
- Setting **primary key** and **NULL/NOT NULL**
```sql
CREATE TABLE Student(
    SID CHAR(8) PRIMARY KEY,
    Name CHAR(20) NOT NULL,
    Email CHAR(20) NOT NULL,
    Age INTEGER NOT NULL,
    GPA REAL NULL
);
```

## Data Record Insertion
- **Using `INSERT INTO` and `VALUES` to create table**
- Table Example: Products
  | prod_name | prod_id | prod_price |
  |-----------|---------|------------|
  | Shampoo   |P01      | 12         |
  |Toothpaste |P02      | 13         |
  |Deodorant  |P03      | 20         |
  |Toothbrush |P04      | 5          |
```sql
/* insert with all values of all columns*/
INSERT INTO Products
VALUES (
  'sugar',
  'P05',
  3
);
```
```sql
/* insert with values of specific columns*/
INSERT INTO Products (prod_name, prod_id)
VALUES (
  'sugar',
  'P05'
);
```
## Filtering Queries
- **Using `WHERE` and Operators to filter a query**
  - **Operators: =, <>(not equal), >, <, >=, <=, BETWEEN, IS NULL, IN, OR, AND, NOT**
- Table Example: Products
  | prod_name | prod_id | prod_price |
  |-----------|---------|------------|
  | Shampoo   |P01      | 12         |
  |Toothpaste |P02      | 13         |
  |Deodorant  |P03      | 20         |
  |Toothbrush |P04      | 5          |
```sql
SELECT prod_price
FROM Products
WHERE prod_price =/*Operator*/ 12;
```
```sql
SELECT prod_price
FROM Products
WHERE prod_price BETWEEN 5 AND 10;
```
```sql
SELECT prod_price
FROM Products
WHERE prod_price IN (10, 11, 12);
```
```sql
SELECT prod_price
FROM Products
WHERE prod_price = 10 OR prod_price = 12;
```
- **IN** vs. **OR**
  - Works the same.
  - **IN** is faster, allows long list of options, and support nested queries.
```sql
SELECT prod_price, prod_id
FROM Products
WHERE NOT prod_price = 10 OR prod_price = 12 AND prod_id = 'P01';
```
- SQL processes **AND** before **OR**

## Sorting Queries
- **Using `ORDER BY` to order a query**
  - Takes the name of one or more columns
  - Can sort by a column not retrieved
  - **Must always be the last clause in a select statement**
  - Table Example: Products
  | prod_name | prod_id | prod_price |
  |-----------|---------|------------|
  | Shampoo   |P01      | 12         |
  |Toothpaste |P02      | 13         |
  |Deodorant  |P03      | 20         |
  |Toothbrush |P04      | 5          |
```sql
SELECT prod_price, prod_id
FROM Products
ORDER BY prod_id;
```
```sql
SELECT prod_price, prod_id
FROM Products
ORDER BY prod_id, prod_price;
```
- Can sort it by column position
```sql
/*Sort by 1st and 2nd column*/
SELECT prod_price, prod_id
FROM Products
ORDER BY 1,2;
```
