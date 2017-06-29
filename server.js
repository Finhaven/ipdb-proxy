const express = require('express')
const proxy = require('http-proxy-middleware')

const app = express()

const config = {
    target: 'https://test.ipdb.io',
    changeOrigin: true,
    headers: {
        app_id: process.env.IPDB_APP_ID,
        app_key: process.env.IPDB_APP_KEY
    }
}

app.use('*', proxy(config))
app.listen(process.env.IPDB_PORT || 9984)
