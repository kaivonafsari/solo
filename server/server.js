var express = require('express');
var http = require('http');
var api = require('instagram-node').instagram();
var app = express();


app.set('views', '../views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../views'));


app.get('/', function (req, res) {
  res.render('index.html');
});

api.use({
  client_id: 'd566482799964fb7ab74938650288eaa',
  client_secret: '78cfc0ea91d041d8bbbb9386fb4f319d'
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});