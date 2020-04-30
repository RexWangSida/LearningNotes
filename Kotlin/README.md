# Kotlin
## Command Line for Compiling and running the kotlin program
- Assuming the program is named _hello.kt_
### Compile the file
```shell
kotlinec hello.kt -include-runtime -d hello.jar
```
This gives a runnable `.jar` file, `-d` indicates the output path for the file, `-include-runtime` makes the `.jar` file self-contained and runnnable by including the Kotlin runtime library in it.
### Execute the program
```shell
java -jar hello.jar
```
This will run the `.jar` file.

## Kotlin Code Style
- **Comment Style**
```kotlin
\\This is comment line
\*
This is a comment too
*\
```
- **Static Typing**
   - does not necessarily require explicit type specification
   - e.g. Variable Assignment
 ```kotlin
 var message = "Hello"
 ```
   - **Type Inference**: In this case, once the variable is declared and initialized, the type of the variable is inferred to be that type.
 ##### OR
 ```kotlin
 var message: String = "Hello"
 ```
 ##### OR
  ```kotlin
 var message: String
 message = "Hello"
 ```
 ## Kotlin Syntax
- No `;` needed, `{}` is needed to group statements by blocks
- **If-Else**
```kotlin
//Same as other language, it also supports inline if-else statement like Python
val msg = if (pts > 80) "well done" else "practice harder!"
```

