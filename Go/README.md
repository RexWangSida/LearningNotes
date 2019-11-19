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
```go
func main() {
	var x, y int = 3, 4
	var f float64 = math.Sqrt(float64(x*x + y*y))
	var z uint = uint(f)
	fmt.Println(x, y, z)
}
```
## Constant
`const` declares constants in Go
```go
const i = 10
```
## Function
The variable and function return type is always after the variable name and function name.
```go
func add(x int, y int) int{
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
`:=` Short assignment is a substitute to `var` which omits types. `:=` **only used inside functions because every statement outside must begin with a key word(var, func, ...)**:
```go
func print() {
	i, j := 1, 2
	fmt.Println(i,j)
}
```
## For Loop
`for` defines For Loops in Go
```go
sum := 0
for i := 0; i < 10; i++ {
	sum += i
}
```
For loop on the operator:
```go
sum := 1
for ; sum < 1000; {
	sum += sum
}
```
