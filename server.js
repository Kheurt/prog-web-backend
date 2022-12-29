const server = require('http')

const app = require('./app')

server.createServer(app)

const hostname = 'localhost';

const port = 3000;

server.listen(port, `${hostname}`, () => {
    console.log(`Listening on port 80. Launch http://${hostname}:${port}`);
});


