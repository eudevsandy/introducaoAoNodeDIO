const http = require("http");
const host = "http://localhost";
const port = 3000;
const stats = require("./pcRamUsage.js"); // Importamos módulo criado para o projeto

http
  .createServer((req, res) => { 
    var url = req.url; 
    if (url === "/stats") {
      res.end(JSON.stringify(stats, null, 2)); 
    } else {
      res.write("<h1>Seja bem vinde</h1>"); 
      res.end();
    }
  })
  .listen(port, () =>
    console.log('Server is running in ${host}:${port}');