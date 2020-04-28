# Kotlin
## Command Line for Compiling and running the kotlin program
- Assuming the program is named hello.kt
### Compile the program
```shell
kotlinec hello.kt -include-runtime -d hello.jar
```
This gives a runnable `.jar` file, `-d` indicates the output path for the file, `-include-runtime` makes the `.jar` file self-contained and runnnable by including the Kotlin runtime library in it.
```shell
java -jar hello.jar
```
This will run the `.jar` file.
