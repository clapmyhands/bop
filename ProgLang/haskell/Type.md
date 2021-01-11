Types starts with capital case.

- `Int` normal integer
- `Integer` unlimited integer
- `Float` single precision floating point number
- `Double` double precision floating point
- `Bool` boolean
- `Char` character. single quote.
- `String` syntac sugar for `[Char]`

Type Variable
is kind of like generics. type variables allow writing general function that does not use behaviour of the type.
polymorphic function - function that have type variables
```haskell
Prelude> :t head
head :: [a] -> a
```


Typeclasses
kind of similar of inheritance but of types. typeclass allows a kind of declaration of interface for type.
few basic typeclass:
- `Eq` supports equality testing.
- `Ord` supports ordering.
- `Show` string representation of a value
- `Read` is the opposite of `Show`. it reads a string and return a "parsed" value. `Read` requires explicit or inferred type result.
```hs
>read "4"
<interactive>:1:0:
    Ambiguous type variable `a' in the constraint:
      `Read a' arising from a use of `read' at <interactive>:1:0-7
    Probable fix: add a type signature that fixes these type variable(s)

> read "5" :: Int
5

> read "5" :: Float
5.0
```
- `Enum` sequentially ordered type. can be enumerated or with `succ` or `pred` functions. can be used in list ranges.
- `Bounded` have an upper and a lower bound.
- `Num` numeric typeclass. can act like numbers. whole number are polymorphic constant. it can change into any member of `Num` typeclass. (`5 -> 5.0 :: float`)
- `Integral` only integral numbers. (`Int` and `Integer`)
- `Floating` only floating point numbers. (`Float` and `Double`)
