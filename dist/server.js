var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);

const startJsonServer = () => (
    new Promise((resolve, reject) => {
      try {
        // create .tmp dir if missing
        // copy db.json file
        try {
          fs.mkdirSync(`../db.json`)
        } catch (e) {
          console.log(e.message)
        }
        fs.copyFileSync(`../db.json`, `../db.json`)
  
        const server = jsonServer.create()
        const router = jsonServer.router(`../db.json`)
        const middlewares = jsonServer.defaults({
          port: 3000
        })
  
        server.use(middlewares)
        server.use(router)
  
        return server.listen(3000, () => {
          console.log('JSON Server is running')
          console.log(`http://localhost:${3000}`)
          resolve()
        })
      } catch (e) {
        reject(e)
      }
    })
  )