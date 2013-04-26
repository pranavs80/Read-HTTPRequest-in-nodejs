var http = require('http');
var userString='';
http.createServer(function (req, res) {
console.log("start");
// Setup the request.  The options parameter is
// the object we defined above.
var user = {
  username: 'The Reddest',
  email: 'brandon@switchonthecode.com',
  firstName: 'Brandon',
  lastName: 'Cannaday'
};

var userString = JSON.stringify(user);

var headers = {
  'Content-Type': 'application/json',
  'Content-Length': userString.length
};

var options = {
  host: 'localhost',
  port: 3000,
  path: '/',
  method: 'POST',
  headers: headers
};

// Setup the request.  The options parameter is
// the object we defined above.
var req = http.request(options, function(res) {
console.log("1");
  res.setEncoding('utf-8');
console.log("2");
  var responseString = '';
console.log("3");
  res.on('data', function(data) {
    responseString += data;
	console.log("4");
  });

  res.on('end', function() {
    var resultObject = JSON.parse(responseString);
	console.log("5");
  });
});
console.log("6");
req.on('error', function(e) {
  // TODO: handle error.
  console.log("7");
});
console.log("8");
req.write(userString);
req.end();
}).listen(3000);