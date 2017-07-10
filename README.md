# ipdb-proxy

Simple proxy that stores `app_id` and `app_key` for IPDB.

# Usage

```
$ IPDB_APP_ID=123 IPDB_APP_KEY=123456 node start
```

By default it binds to `0.0.0.0:9984`, if you want to change port use
the env variable `IPDB_PORT`.

## Env variables

- `IPDB_TARGET`: URL to connect to (default `https://test.ipdb.io`).
- `IPDB_PORT`: Port to use when creating the server (default `9984`).
- `IPDB_APP_ID`: the `app_id` to add to the headers of every request.
- `IPDB_APP_KEY`: the (secret) `app_key` to add to the headers of every request.
