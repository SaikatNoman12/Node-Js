console.log(__dirname); // get folder path;
console.log(__filename); // get file path;
const myExport = require('./people');

console.log(myExport.peoples2); // output:- [ 'anik', 'sakib', 'rakib', 'karim' ];
myExport.testing();
