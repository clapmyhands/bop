---
type: knowledge
keywords: binlog database event-handling
tags: event-handling database
---

# Listening to Binlog

Note Created: 2021-05-22

---

It's possible to listen to database binlog as an event stream.
This can then be handled following event-handling pattern.
The binlog events can trigger any action based on the changed data e.g. [[Cache Invalidation]] / write on certain data.

This might seem like overkill or wasteful if only a small subset of binlog event is of interest.
However this is an easy way of adding event handling that ensures committed action.
