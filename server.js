require('dotenv').config();

const http = require('http')

const app = require('./app')

const server = http.createServer(app)

const hostname = 'localhost';

const port = 3000;

server.listen(process.env.PORT, `${process.env.HOST}`, () => {
    console.log(`Listening on port 80. Launch http://${process.env.HOST}:${process.env.PORT}`);
});


