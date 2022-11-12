var fs = require('fs');

function readFileSync(filename){
    console.log("reading file..")
    var content = "this is content"
    return content.toUpperCase();
}
var content = readFileSync
console.log(content);
console.log("cmpltd");