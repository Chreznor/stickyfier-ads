// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = express.Router();

//  Serve static files
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
// app.use(router);
app.set("view options", {layout: false});
app.use(express.static(__dirname + '/src'));
app.use('/bin',  express.static( path.join(__dirname, '/bin')));

app.get('/', function (req, res) {
  res.render('index.html')
})

// Configure port
const port = 8080;
// Listen to port
app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port: ${port}`);
});
