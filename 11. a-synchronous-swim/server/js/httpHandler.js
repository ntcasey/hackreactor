const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  //console.log('Serving request type ' + req.method + ' for url ' + req.url);

  console.log(req.method)
  //console.log(module.exports.backgroundImageFile)
  if(req.method === "GET") {
    if(req.url === "/") {
      res.writeHead(200, headers);
      res.end(messageQueue.dequeue());
    } else if(req.url === "/background.jpg") {
      fs.readFile(module.exports.backgroundImageFile, function(err, data) {
        if (err) {// Fail if the file can't be read.
          console.log('Error')
          throw err
        } else {
          console.log('here')
          res.writeHead(200, {'Content-Type': 'image/jpeg'})
          res.end(data) // Send the file data to the browser.
        }
      })
    }
  }

  if(req.method === "POST") {
    let body = '';
    req.on('data', chunk => {
        body += chunk; // convert Buffer to string
    });
    req.on('end', () => {
        console.log('ok here')
        //console.log(body);
        let temp = multipart.getFile(body)
        console.log(temp)
        res.end('ok');
    });
  }
  //next(); // invoke next() at the end of a request to help with testing!
};
