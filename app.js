var http = require('http');
var os = require('os');
var port = 8080;

http.createServer( (req, res) => {
  console.log('Requested: ' + req.url);
  res.writeHead(200, { 'Content-Type':'text/html' });
  res.write('<h1>Hello, www site!</h1>');
  res.end();
}).listen(port, () => {
  console.log('Listen ... ' + os.hostname()+':'+port);
});