var express = require("express");
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const cors = require('cors');
const proxy = require('./server/routes/proxy');

var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/dist/wather-app')));

// API location
app.use('/proxy', proxy);
// Send all other requests to the Angular app
app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/wather-app/browser/index.html'));
});
const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
