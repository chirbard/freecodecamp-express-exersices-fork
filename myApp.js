require('dotenv').config()

let express = require('express');
let app = express();
port = 80;
app.listen(port)

function getHandler(req, res) {
  absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath)
}

const assetsFolderPath = __dirname + '/public'
app.use(express.static(assetsFolderPath))


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
