# GO Lang Syntax
## Comment
```go
//This is a comment line
```
```go
/*
This is a comment segment
*/
```
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
Variables declaration: `var` statement declares variables in Go, variable type after variable name(inverse of most languages).
```go
var x,y int
var z [10]int
```
Variables initialization:
```go
var x,y int = 1, 2
```
Variables without explicit initializations will be given zero value:
  - **0** for numeric types `int`, `float`
  - **false** for boolean `bool`
  - **""** empty string for `string`
## Type Conversion
Similar to Python, use `type(varibale)`:

## Function
The variable and function return type is always after the variable name and function name.
```go
func add(x int, y int){
	return x + y
}
```
Two or more consecutive named function parameters share a type:
```go
func add(x, y int){
	return x + y
}
```
Return multiple result:
```go
func swap(x, y string) (string, string) {
	return y, x
}
```
Named return value with naked return:
```go
func split(sum int) (x, y int) { //x, y are named return value
	x = sum * 4 / 9
	y = sum - x
	return //naked return: returns x, y automatically
}
```
`:=` Short assignment is a substitute to `var` which omits types **only inside functions**:
```go
func print() {
	i, j := 1, 2
	fmt.Println(i,j)
}
```
