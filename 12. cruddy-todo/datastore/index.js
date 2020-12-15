const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const counter = require('./counter');

var items = {};

// Public API - Fix these CRUD functions ///////////////////////////////////////

exports.create = (text, callback) => {
  counter.getNextUniqueId((err, id) => {
    if(err) {
      console.log('first error')
      return
    } else {
      items[id] = text
      fs.writeFile(path.join(exports.dataDir, `${id}.txt`), text, (err) => {
        if(err) {
          console.log('unsuccessful write')
        } else {
          callback(null, { id, text });
        }
      })
    }
  })
};

exports.readAll = (callback) => {
  fs.readFile(counter.counterFile, 'utf8', (err, numFiles) => {
    if (err || !Number(numFiles)) {
      callback(null, [])
    } else {
      const data = []
      const totalNumFiles = Number(numFiles)

      for(let i = 1; i <= totalNumFiles; i++) {
        let fileNumber = `${counter.zeroPaddedNumber(i)}`
        let fileName = path.join(exports.dataDir, `${fileNumber}`) + '.txt'

        fs.readFile(fileName, 'utf8', (err, text) => {
          if(err) {
            console.log('could not read file')
            throw Error
          } else {
            data.push({id: fileNumber, text})
            if(data.length === totalNumFiles) {
              callback(null, data);
            }
          }
        })
      }
    }
  });
  // var data = _.map(items, (text, id) => {
  //   return { id, text };
  // });
  // callback(null, data);
};

exports.readOne = (id, callback) => {
  let fileName = path.join(exports.dataDir, id) + '.txt'
  fs.readFile(fileName, 'utf8', (err, text) => {
    if(err) {
      callback(new Error(`No item with id: ${id}`));
    } else {
      callback(null, {id, text});
    }
  })

  // var text = items[id];
  // if (!text) {
  //   callback(new Error(`No item with id: ${id}`));
  // } else {
  //   callback(null, { id, text });
  // }
};

exports.update = (id, text, callback) => {
  let fileName = path.join(exports.dataDir, id) + '.txt'
  fs.exists(fileName, (exists) => {
    if(exists) {
      fs.writeFile(fileName, text, (err) => {
        if(err) {
          console.log('Error: ' + err)
        } else {
          callback(null, { id, text });
        }
      })
    } else {
      callback(new Error(`No item with id: ${id}`));
    }
  });

  // var item = items[id];
  // if (!item) {
  //   callback(new Error(`No item with id: ${id}`));
  // } else {
  //   items[id] = text;
  //   callback(null, { id, text });
  // }
};

exports.delete = (id, callback) => {
  let fileName = path.join(exports.dataDir, id) + '.txt'
  fs.unlink(fileName, (err) => {
    if(err) {
      callback(new Error(`No item with id: ${id}`));
    } else {
      console.log(`File deleted`)
      callback();
    }
  })


  // var item = items[id];
  // delete items[id];
  // if (!item) {
  //   // report an error if item not found
  //   callback(new Error(`No item with id: ${id}`));
  // } else {
  //   callback();
  // }
};

// Config+Initialization code -- DO NOT MODIFY /////////////////////////////////

exports.dataDir = path.join(__dirname, 'data');

exports.initialize = () => {
  if (!fs.existsSync(exports.dataDir)) {
    fs.mkdirSync(exports.dataDir);
  }
};

//exports.create('apple')
//exports.create('three', () => console.log('3'))
//exports.readAll(() => {})