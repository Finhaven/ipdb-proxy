const express = require('express');
const cors = require('cors');
const proxy = require('http-proxy-middleware');

const app = express();

const config = {
    target: process.env.IPDB_TARGET || 'http://localhost:5984/',
    changeOrigin: true
};

function checkApiKey(req, res, next) {
    if (req.headers.app_id === process.env.IPDB_APP_ID
        &&
        req.headers.app_key === process.env.IPDB_APP_KEY) {
        next();
    } else {
        console.log('auth fail', req.headers);
        res.status(401).send('no chain for you.  wrong credentials.')
    }
}

app.use(cors());
app.use(checkApiKey);
app.use('*', proxy(config));
let port = process.env.IPDB_PORT || 9984;
app.listen(port);

if (!process.env.IPDB_APP_ID) {
    throw new Error('env var IPDB_APP_ID not set');
}
if (!process.env.IPDB_APP_KEY) {
    throw new Error('env var IPDB_APP_KEY not set');
}

console.log('listening on port',port);