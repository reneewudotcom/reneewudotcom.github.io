import {readFileSync, promises as fsPromises} from 'fs';
const {readFileSync, promises: fsPromises} = require('fs');

// read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  //console.log(arr);

  return arr;
}

//syncReadFile('./example.txt');

// --------------------------------------------------------------

// read file ASYNCHRONOUSLY
async function asyncReadFile(filename) {
  try {
    const contents = await fsPromises.readFile(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    //console.log(arr); 

    return arr;
  } catch (err) {
    console.log(err);
  }
}

//asyncReadFile('./example.txt');


var worker = new Worker("showdown/worker.js");
worker.onmessage = function(message) {
	document.body.innerHTML = message.data;
}
//worker.postMessage("# Title\n **bold**");
worker.postMessage(asyncReadFile('file1.md'));
