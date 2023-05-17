import http from 'http'
import { automateFunction } from './automate/automate.js';
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'

const hostname = "127.0.0.1";
const port = 8000;

const app = express()

app.use(cors({ origin: "*" }));

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const jsonParser = bodyParser.json();

app.post('/', urlencodedParser, function(req, res) {
    res.send(req.body)
})

app.post("/json", jsonParser, function (req, res) {
  res.send(req.body);
  if(req.body.email && req.body.password) {
    automateFunction(req.body.email, req.body.password)
  }
});

app.listen(port, () => {
    
});