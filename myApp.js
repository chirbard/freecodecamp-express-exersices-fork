require('dotenv').config()
let express = require('express');
let app = express();

function middleware(req, res, next) {
  const method = req.method;
  const path = req.path;
  const ip = req.ip;
  console.log(`${method} ${path} - ${ip}`);
  next();
}

app.use(middleware)

function getHandler(req, res) {
  absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath)
}

const assetsFolderPath = __dirname + '/public'
app.use('/public', express.static(assetsFolderPath))

app.get('/', getHandler);

function jsonHandler(req, res) {
  messageStyle = process.env.MESSAGE_STYLE
  if (messageStyle == 'uppercase') {
    jsonData = {"message": "HELLO JSON"}
  } else {
    jsonData = {"message": "Hello json"}
  }
  res.json(jsonData)
}

app.get('/json', jsonHandler);

































 module.exports = app;
