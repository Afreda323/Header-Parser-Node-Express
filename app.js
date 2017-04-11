const express = require('express');
const path = require('path');

var app = express();
//Declare port
var port = process.env.PORT || 3000;
//Static stuff
app.use(express.static(path.join(__dirname, 'public')));

//Serve up tutorial on how to use
app.get('/', (req, res) => {
  res.send(path.join(__dirname, 'public'))
});

//At /get, send the requested data
app.get('/get', (req, res) => {
  //Get user IP from request headers
  var ip = req.ip;
  //Get user language from request headers
  var language = req.headers['accept-language'].split(',')[0];
  //Get user Software from request headers
  var software = req.headers['user-agent'].split(')')[0].split(' (')[1];
  //Create response object
  var returnObj = {ip, language, software};
  //Send it to the user
  res.send(returnObj);
});

app.listen(port, () => {
    console.log('Running on port: ' + port);
})
