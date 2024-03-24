let express = require('express');
let app = express();
port = 80;
app.listen(port)

function getHandler(req, res) {
  res.send('Hello Express');
}

app.get('/', getHandler);
  
































 module.exports = app;
