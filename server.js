const http = require('http'), // imports the http modul
  fs = require('fs'), // import the fs module
  url = require('url'); // import the url module


http.createServer((request, response) => { // creates server
  let addr = request.url,
    q = url.parse(addr, true), // For incoming requests, parse the request.url 
    filePath = '';

/*For all requests coming in to the “server.js” file, the fs module is used to 
 log both the request URL and a timestamp to the “log.txt” file.*/
  fs.appendFile('log.txt', 'URL: ' + addr + '\nTimestamp: ' + new Date() + '\n\n', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Added to log.');
    }
  });

  if (q.pathname.includes('documentation')) { // determine if the URL contains the word “documentation”
    filePath = (__dirname + '/documentation.html');
  } else {
    filePath = 'index.html';
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();

  });

}).listen(8080);
console.log('My test server is running on Port 8080.'); // listens for requests on port 8080.
