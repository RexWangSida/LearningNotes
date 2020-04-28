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
- **Static Typing**
   - does not necessarily require explicit type specification
 - e.g. Variable Assignment
 ```kotlin
 val message = "Hello"
 ```
 ##### OR
 ```kotlin
 val message: String = "Hello"
 ```
 ##### OR
  ```kotlin
 val message: String
 message = "Hello"
 ```
