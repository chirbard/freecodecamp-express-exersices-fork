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

































 module.exports = app;
