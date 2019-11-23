# Semaphore
* A single binary semaphore is sufficient for mutual exclusion of many processes.
## Basics
```Algorithm
var s: semaphore = init
P(s): <await s > 0 then s := s - 1>----------------wait operation
V(s): <s := s + 1>---------------------------------signal operation
```
