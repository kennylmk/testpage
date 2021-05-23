var http = require('http');
var fs = require('fs');
server=http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // console.log('data:' + data)
    res.write(data);
    return res.end();
  });
}).listen(8083);

// const server=http.createServer(function (req, res) {
//     fs.readFile('index.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   })
//   server.listen(8082);