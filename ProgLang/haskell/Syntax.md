unequal = `/=`

var declaration is simply function declaration with no parameter

2 types of function call:
- prefix
	```haskell
	add 1 2
	```
- infix - can only be called if it has 2 parameter. requires backtick.
	```hs
	1 `add` 2
	```

if always requires an else as it's 1 statement

function name needs to start with lowercase letters

string is a list of char

char is wrapped with single quote while string use double quotes

extending list uses `++`, this will result in going thru every element in first list to append to the end of new list

appending to head uses `:`, e.g.
```hs
'a':"HELLO" -> "aHello"
```

literal can be thought of as syntactic sugar to prepending list multiple times

extracting an index uses `!!`, e.g.
```hs
"HELLO" !! 2 -> 'E'
```

list are comparable with (in)equality operator. (in)equality check is done in lexicographical order.

- `head` takes the head of a list
- `tail` takes the head off and return the list without head
- `last` takes the last element
- `init` takes everything but the last element
the above list operation throw error on empty list
- `length` returns the length
- `null` checks for empty list
- `reverse` reverses list
- `take` takes x element from front of list
- `drop` drops x element from front of list
- `maximum` takes maximum if list are ordered e.g.
	```
	maximum "HELLZO" -> 'Z'
	```
- `minimum` takes minimum
- `sum` sums list of number
- `product` multiples all element in list
- `elem` checks if x is in list. usually used as infix
	```
	4 \`elem\` \[3,4,5,6\]
	True
	```

range are useful way to declare a range of value
```hs
[1..10] -> [1,2,3,4,5,6,7,8,9,10]
[2,4..20] -> [2,4,6,8,10,12,14,16,18,20]
[10,9..1] -> [10,9,8,7,6,5,4,3,2,1]
['A'..'Z'] -> "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
['A'..'z'] ->"ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz"
['A','C'..'Z'] -> "ACEGIKMOQSUWY"
[1,2..] -> infinite list
```

float is not very accurate in list so be careful (avoid)

its possible to `take` x value from infinite list e.g.
```hs
take 5 [2,4..] -> [2,4,6,8,10]
```

helpful function that returns infinite list:
- `cycle` repeats a list to infinity
- `repeat` repeats an element to infinity

list comprehension takes the form of
```hs
[`expression` | `var` <- `input list`, `filter`]
```

expression is only applied if filter is true for that element. using two input expression will result in multiplication of length.


tuple is a more rigid list. uses normal parentheses.

tuple can have different type as its element and tuple of different length is considered different types.

a list of list can have list of different length but a list of tuple must all have the same length tuple.

2 useful function for tuple of length 2 (or so called pair):
- `fst` takes first element
- `snd` takes second element

`zip` combines 2 list (can be diff type) into a list of tuple. it takes the length of the shorter list.
