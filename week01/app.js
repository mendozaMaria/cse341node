const http = require('http'); //import files in nodeJS

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);