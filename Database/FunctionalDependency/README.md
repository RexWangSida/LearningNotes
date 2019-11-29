# Functional Dependency(FD)
- FD is an assertion about the relation, such that in **R, X → Y**.
  - X functionally determines Y
  - a value of Y is bounded to a value of X
  - e.g. a → b   then if in table a1 → b3, (a1 → b2 & a1 → b1) are not valid
- Format:
  - R = (ABCD...)
  - F = {AB → CD, C → D, ...} holds on R
- Right-hand side can be splited or combined
```
(AB → CD holds for R) ≡ (AB → C and AB → D holds for R)
```
  - **Left-hand side cannot be splited**
  
- FDs are a generalization of keys
  - Superkey: X → R //Superkey X determines all attributes of relation R
## Trivial FDs
  - A → A always holds
  - A1A2...An → B1B2...Bn is:
    - **Trivial** if {B1, B2, ..., Bn} ⊆ {A1, A2, ..., An} (subset)
    - **Non-trivial** if {A1, A2, ..., An} - {B1, B2, ..., Bn} ≠ Ø
    - **Completely Non-trivial** if {A1, A2, ..., An} ∩ {B1, B2, ..., Bn} = Ø
  - Trival FDs can be deleted
```
AB → AD ≡ AB → D
```
## Axioms for FDs
  - X, Y, Z sets of attributes
  - **Reflexivity**: Y ⊆ X ⇒ X → Y
  - **Augmentation**: X → Y ⇒ XZ → YZ
  - **Transitivity**: X → Y ∧ Y → Z ⇒ X → Z
  - **Union**: X → Y ∧ X → Z ⇒ X → YZ
  - **Decomposition**: X → YZ ⇒ X → Y ∧ X → Z
## Closure of FD
  - F is a set of FDs
  - F^+ is a **closure*** of F which is the set of FDs can be derived from F
## Minimal Cover (Minimal Basis)
  - F and G are FDs
  - F is a minimal cover of G if F is the **smallest set** of FDs that cover G
  - **Form a Minimal Cover**:
    - Decompose RHS
    - Repeatedly try to remove RHS
    - Repeatedly try to remove LHS
