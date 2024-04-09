require('dotenv').config();
let bodyParser = require('body-parser');
let express = require('express');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();  // Hypothetical synchronous operation
  next();
}, function(req, res) {
  res.json({"time": req.time})
});

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({echo: word});
});

app.get("/name", (req, res) => {
  var { first: firstName, last: lastName } = req.query;
  res.json({name: `${firstName} ${lastName}`});
});







 module.exports = app;
