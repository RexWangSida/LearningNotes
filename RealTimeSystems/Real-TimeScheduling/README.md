## Real-Time Scheduling

### Process
  - A program in execution.
  - An abstraction of a running program.
  - The logical unit of work scheduled by the OS.

### Stack vs. Heap
|                     |Stack    |Heap|
|-----|---------|----|
|Creation of an object| Var x; | Var* x = new Var();|
|Lifetime | Runtime | Fixed, only delete when free is called|
|Grow in size | Fixed size | More memory can be added by the OS|
|Common error| Stack overflow | Heap fragmentation|
|When to use?| Knowing the size of the memory, small data size | Need a large scale of dynamic memory|
