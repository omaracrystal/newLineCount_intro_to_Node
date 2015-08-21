function newLineCount (readFile) {
  var array = (readFile.split("\n").length - 2);
  console.log(array);
  return array;
}
