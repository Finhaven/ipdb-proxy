# ipdb-proxy

Simple proxy that stores `app_id` and `app_key` for IPDB.

# Usage

```
$ IPDB_APP_ID=123 IPDB_APP_KEY=123456 node start
```

By default it binds to `0.0.0.0:9984`, if you want to change port use
the env variable `IPDB_PORT`.
