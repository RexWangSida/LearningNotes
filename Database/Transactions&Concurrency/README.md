# Transactions & Concurrency in DBMS
## Transactions
- A transaction is **a unit of program execution** that **accesses** and possibly **updates** data
- During transaction the database maybe temporarily inconsistent but when the transaction completes(is committed), the database must be consistent.
- **Transaction States :** 
  - **Active** - initial state and it stays in this state while executing
  - **Partially committed** - after final statement executed
  - **Failed** - after the discovery that normal execution can no longer procceed
  - **Aborted** - after the traction fails the database restores to its state prior to the start of the transaction, two options after aborted: restart / kill
  - **Committed** - after successful completion
<image src = "./src/state.jpg" size = 0.5></image>
