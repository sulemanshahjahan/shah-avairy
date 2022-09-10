var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname));
var port = process.env.PORT || 300;



var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();


server.use(middlewares);
server.use(router);

app.listen(port);
console.log('server started '+ port);