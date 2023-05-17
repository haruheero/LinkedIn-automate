import http from 'http'
import { automateFunction } from './automate/automate.js';

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  automateFunction()
});