# Software Testing
## Type of Testings
### Dynamic vs. Static
- **Dynamic Testing**: Testing code by executing it.
- **Static Analysis**: Testing code without executing it.

### Grey-box vs. Black-box vs. White-box
- **Grey-box Testing**: Testing that uses knowledge of the system to design tests for it.(source code inaccessible)

During a grey box test, the person may know how the system components interact but not have detailed knowledge about internal program functions and operation(source code).

- **Black-box Testing**: Testing without any knowledge of the software’s implementation.(source code inaccessible)
- **White-box Testing**: sting that systematically uses knowledge of the system to design tests for it.(source code accessible)

### Functional vs. Non-funtional
- **Functional Testing**: Testing that checks whether the program provides some specific functionality.
- **Non-Functional Testing**: Testing that assesses the program on something other than whether it provides some function.

## Fault, Error, Failure
- **Fault**: A **stable property** of the program that can **cause a failure** to occur.
- **Error**: A **bad state** of a **running program** that can **cause a failure** to occur.
- **Failure**: The software does something observably bad.

## Unit Testing vs. System Testing vs. Integration Testing vs. Acception Testing vs. Regression Testing
### Unit Testing
- locate low-level fault precisely
- easily conducted by programmer
- typically used to a single method
- **cannot find all problems**, many faults don’t manifest at the unit level at all.
### System Testing
- Typically black box Testing
- test functional and non-functional requirements
- help to understand non-explicit requirements
- can be done by a special team
### Integration Testing
- Testing interacting classes, modules or subsystem(focus on interactions)
- Typically, grouping together some units and testing them together using a black-box approach
- Three **main approach**:
  - Big Bang: Put everything together then test
  - Top-down: Modules tested from the entry points and integrated progressively
  - Bottom-up: Modules are progressively integrated and tested from the most elementary ones
- More **traceble than system test**
### Acception Testing
- Work with client to build test case meaningful to them
- Design by domain experts
- embodied in a paper script
- performed by potential users
- Main intent is to **check if that product will work in a production environment**
- Much of a validation acticity other tha verification
### Regression Testing
- After software release, the test cases are kept for re-use
- Main intent is to **check that what used to work still does**
- apply at any scope(unit, system, integration)

## [Five Type of Softwares by Joel Spolsky](https://www.joelonsoftware.com/2002/05/06/five-worlds/)
- Shrinkwrap(open source; configurable; web-based)
- Internal
- Embedded
- Games
- Throwaway
