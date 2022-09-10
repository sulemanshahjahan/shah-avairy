var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname));
var port = process.env.PORT || 3000;
app.listen(port);
console.log('server started '+ port);

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../db.json');


server.use(router);