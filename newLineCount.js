var fs = require('fs');
var file = 'test.txt';

//this will make it possible to print out the file's information onto the console. You have to add .toString so that it doesn't show up as just numbers (which is how the computer reads the file)
var readFile = fs.readFileSync(file).toString()

console.log(readFile)


//if we print readFile and split it where the line breaks are happending we then have an array of the lines of the document. The length of the document is 4 because on the save option within test.txt it automatically saves an extra line. So I subtract 2 for the extra line and the 1st line since that is not considered a "new line"

function newLineCount (readFile) {
  var array = (readFile.split("\n").length - 2);
  console.log(array);
  return array;
}

newLineCount(readFile)


