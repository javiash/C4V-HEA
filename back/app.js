const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var path = require("path")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname + "/public")));


app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
  })

app.listen('3000', () => {
    console.log(`Listening on port 3000`);
  });