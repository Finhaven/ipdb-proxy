# ipdb-proxy

Simple proxy to check `app_id` and `app_key` on a private instance of bigchainDB.

# Usage

```
$ IPDB_APP_ID=123 IPDB_APP_KEY=123456 node start
```

By default it binds to `0.0.0.0:9984`, if you want to change port use
the env variable `IPDB_PORT`.

## Running with Docker

```
git clone https://github.com/FrontierFoundry/ipdb-proxy
docker build -t ipdb-proxy ipdb-proxy
docker run -d -p 9984:9984 --env-file .env ipdb-proxy
```
the above presumes env vars are set in a file `.env` that sets vars as so
```
IPDB_APP_ID=123
IPDB_APP_KEY=123456
```

## Env variables

- `IPDB_TARGET`: URL to connect to (default `http://localhost:5984`).
- `IPDB_PORT`: Port to use when creating the server (default `9984`).
- `IPDB_APP_ID`: the `app_id` to check in the headers of every request.
- `IPDB_APP_KEY`: the (secret) `app_key` to check in the headers of every request.

