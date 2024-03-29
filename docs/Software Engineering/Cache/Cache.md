---
type: article
keywords: cache
tags: cache usage-pattern
---

# Cache

Note Created: 2021-05-22

---

- [Usage Pattern](#usage-pattern)
  - [Read Through](#read-through)
  - [Write Through](#write-through)
  - [Write Behind](#write-behind)
  - [Write Invalidate](#write-invalidate)
  - [Cache Warming](#cache-warming)

---

## Usage Pattern

### Read Through

Read cache, when not found, check database, write result back to cache.
Might have issues with load on cold cache.

### Write Through

Synchronously write to database then cache.
Safe because database is written first.

### Write Behind

Write to cache then asynchronously write to database.
Typically faster than writing to database and supports batch write but has a chance of losing the write to database.
Possible race condition issue when handling multiple asynchronous write.

### Write Invalidate

Write to database then invalidate the cache.
This results in cache miss on next read.
Typically paired with [Read Through](#read-through)

### Cache Warming

Prefill cache (warming up) in preparation for high load to reduce time spent on writing to cache on miss.
This can be used on high demand key or regularly updating low demand key.
