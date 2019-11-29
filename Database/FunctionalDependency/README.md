# Functional Dependency(FD)
- FD is an assertion about the relation, such that in **R, X → Y**.
  - X functionally determines Y
  - a value of Y is bounded to a value of X
  - e.g. a → b   then if in table a1 → b3, (a1 → b2 & a1 → b1) are not valid
- Format:
  - R = (ABCD...)
  - F = {AB → CD, C → D, ...} holds on R
  
