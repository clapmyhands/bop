
- [Cache](#cache)
  - [Behaviour](#behaviour)
    - [Caching Pattern](#caching-pattern)
      - [Read Through](#read-through)
      - [Write Through](#write-through)
      - [Write Behind](#write-behind)
      - [Write Invalidate](#write-invalidate)
      - [Cache Warming](#cache-warming)
  - [Specific Tools](#specific-tools)
    - [Redis](#redis)
  - [Cross tool logic](#cross-tool-logic)
      - [Binlog - Cache](#binlog---cache)

---

# Cache
## Behaviour
### Caching Pattern
#### Read Through
Read cache, when not found, check database, write result back to cache. Might have issues with load on cold cache.

#### Write Through
Synchronously write to database then cache. (safe because DB first)

#### Write Behind
Write to cache then asynchronously write to db. Faster and can batch write but has a chance of losing write to db. Possible race condition issue with handling multiple asynchronous write too.

#### Write Invalidate
Write to db then invalidate cache. this results in cache always miss next time.

#### Cache Warming
Prefill (warming up) cache (keys) in preparation for high load. can be used on high demand key or regularly updating low demand key.



## Specific Tools
### Redis

## Cross tool logic
#### Binlog - Cache
It's possible to listen to DB binlog as an event stream which can trigger cache invalidation/write on certain data. this can be wasteful if you only care about certain data out of the binlog but if you are already listening to the binlog, this can be a useful way.