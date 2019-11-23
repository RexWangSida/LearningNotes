# Semaphore
* A single binary semaphore is sufficient for mutual exclusion of many processes.
## Basics
```Algorithm
var s: semaphore = init
P(s): <await s > 0 then s := s - 1>----------------wait operation
V(s): <s := s + 1>---------------------------------signal operation
```
## Semaphore in Python
* Basics
```python
from threading import Thread, Semaphore
s = Semaphore(1)
s.acquire() ## wait
s.release() ## signal
```
* Example
```python
from threading import Thread, Semaphore
from time import sleep
from sys import stdout

class Ping(Thread):
    def run(self):
        while True:
            s.acquire()      # wait
            print('ping')    # critical section
            s.release()      # signal
            sleep(2)         # noncritical section
 
class Pong(Thread):
    def run(self):
        while True:
            s.acquire()      # wait
            print('pong')    # critical section
            s.release()      # signal
            sleep(4)         # noncritical section

s = Semaphore(1)             # create semaphore
ping = Ping(); pong = Pong() # create new threads
ping.start(); pong.start()   # run threads
```
