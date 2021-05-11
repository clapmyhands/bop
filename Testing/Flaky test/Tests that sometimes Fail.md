https://samsaffron.com/archive/2019/05/15/tests-that-sometimes-fail

flaky test or heisentest (or heisenbug) ref: https://en.wikipedia.org/wiki/Heisenbug

sometimes fixing a flaky test means the actual fix is on the code not on the test itself.

assign flaky test to original test writer to fix, and give post mortem and treat it like an incident, figure out root cause
several reason why flaky test happens:

1. hard coded id
this can be further generalized as any hardcoded assumptions. but coming back to hardcoded id, when specifically using tables with auto increment ids, sometimes its simple to simply assign id and check whether it's equal but actually auto increment is not truncated when record is truncated. easier would be to drop and recreate schema, easiest to drop and recreate db, but anything that goes to easier usually hides the cost such as time/instability. better to just not assume ID.

2. random data
some unexpected data can expose a bug or a wrong assumption deep inside the code. this is why some effort are made to do fuzzy testing to generate random data with some restriction to hit the system. ref: https://en.wikipedia.org/wiki/Fuzzing

3. db execution ordering assumptions
this is related to point 1 in that order should not be assumed unless explicitly ordered (no pun intended)

4. time assumptions
time is one of those things that we don't usually think about testing for because, how can time fail?. However, code that is basing its condition on time can definitely fail and code should be designed to be easily testable even against time.
related to this is places where we use time sleep to wait on some asynchronous or background processing. this is a typical flaky reason because not only does this make your test take longer, its also implicit. if the code does need to take some specific amount of time, then it should be explicit, and test should not rely on sleep to wait on some state. instead use polling or some explicit way to sync state (by possibly calling a function isntead of waiting on some state to be true)

5. leaky global state
sometimes in a test suite/between tests, there can be some modified global state which would result in some condition being true only if tests are run in certain order/way. that's why tests should always be run on random order.

6. assumptions about environment

7. concurrency
semi-related to point 4 on waiting on some state, if we use background processing in test, there could be race condition that are unexpected. especially if test are run in parallel.

8. resource leak/constraint
remember that in the end your test are run locally, pipeline, and in production, its hard to make sure the condition is always the same (even if you use container). There will be small differences here and there.

Handling Flaky Test:
1. should be a team concern
   1. should be team decision to remove, run repeatedly, ignore, or invest time to find cause and fix.
2. stopping deployment if any test failed
   1. depends on urgency, sometimes if deployment timeline is very hard pressed, test can be quarantine/excluded temporarily
3. run test in random order
   1. dont assume order
4. invest/make tests run faster
   1. tighter tests means it can be run faster on a loop and flaky test are found faster
5. regularly run test suite in asynchronous manner to code change
   1. sometimes a very rare flaky test can be found if your test suite are fast and you're running it endlessly (even if say chance of the flaky bug happening 1/xxxxx)
6. add code to specifically handle/log in unexpected flaky case
