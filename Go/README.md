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
## Function
The variable and function return type is always after the variable name and function name.
```go
func add(x int, y int){
	return x+y
}
```
