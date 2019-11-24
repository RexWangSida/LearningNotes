# Semaphore
## Basics
```Algorithm
var s: semaphore = init
P(s): <await s > 0 then s := s - 1>----------------wait operation
V(s): <s := s + 1>---------------------------------signal operation
```
## Semaphore in Python
```python
from threading import Semaphore
s = Semaphore(1)
s.acquire() ## wait
s.release() ## signal
```
## Semaphore for Mutual Exclusion
* A single binary semaphore(mutex) is sufficient for mutual exclusion of many processes, acts the same as mutual exclusion lock on critical section.
```algorithm
var mutex: semaphore = 1

process CS(i: 0 .. N – 1)
    while true do
        P(mutex)
        critical section
        V(mutex)
        noncritical section
```
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
## Semaphore for Barrier Synchronization

```algorithm
var barrier1, barrier2: semaphore = 0, 0

process worker1
    while true do
        task 1
        V(barrier1)
        P(barrier2)

process worker2
    while true do
        task 2
        V(barrier2)
        P(barrier1)

```
```python
from threading import Thread, Semaphore
from time import sleep
from sys import stdout

class Ping(Thread):
    def run(self):
        while True:
            stdout.write('ping\n'); sleep(2)    # task
            barrier1.release()                  # signal
            barrier2.acquire()                  # wait

class Pong(Thread):
    def run(self):
        while True:
            stdout.write('pong\n'); sleep(4)    # task
            barrier2.release()                  # signal
            barrier1.acquire()                  # wait

barrier1, barrier2 = Semaphore(0), Semaphore(0) # create semaphores
ping = Ping(); pong = Pong()                    # create new threads
ping.start(); pong.start()                      # run threads
```
