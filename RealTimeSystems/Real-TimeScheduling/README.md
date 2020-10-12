## Real-Time Scheduling

### Process
  - A program in execution.
  - An abstraction of a running program.
  - The logical unit of work scheduled by OS.

### Stack vs. Heap
|     |Stack    |Heap|
|-----|---------|----|
|Creation of an object| Var x; | Var* x = new Var();|
|Lifetime | Runtime | Fixed, only delete when free is called|
