# GO Lang Syntax

## Package
Programs start running in package `main`.
```go
package main
```
## Import
Import one package:
```go
import "fmt"
```
Import multiple packages:
```go
import (
	"fmt"
	"math/rand"
)
```
## Variable
Variables declaration: variable type after variable name(inverse of most languages).
```go
x,y int
z [10]int
```
## Function
The variable and function return type is always after the variable name and function name.
```go
func add(x int, y int){
	return x + y
}
```
two or more consecutive named function parameters share a type:
```go
func add(x, y int){
	return x + y
}
```
