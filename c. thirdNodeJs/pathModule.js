const path = require('path');

const myPath = 'F:/NODE JS/c. thirdNodeJs/pathModule.js';

/* ---:::::path.posix:::::--- */
console.log(path.posix); // return all path method and properties:

/* ---::path.basename()::--- */
console.log(path.basename(myPath)); // return "pathModule.js"

/* ---::path.delimiter::--- */
console.log(path.delimiter); // return "pathModule.js"

/* ---::path.dirname()::--- */
console.log(path.dirname(myPath)); // return "F:/NODE JS/c. thirdNodeJs"

/* ---::path.extname()::--- */
console.log(path.extname(myPath)); // return ".js"

/* ---::path.isAbsolute()::--- */
console.log(path.isAbsolute(myPath)); // return true

/* ---::path.join()::--- */
console.log(path.join('hello', 'js')); // return "hello\js"

/* ---::path.normalize()::--- */
console.log(path.normalize(myPath)); // return "F:\NODE JS\c. thirdNodeJs\pathModule.js"

/* ---::path.parse()::--- */
console.log(path.parse(myPath));
/* return {
    root: 'F:/',
    dir: 'F:/NODE JS/c. thirdNodeJs',
    base: 'pathModule.js',
    ext: '.js',
    name: 'pathModule'
} */

/* ---::path.formate()::--- */
const formatPath = path.parse(myPath);
console.log(path.format(formatPath)); // return "F:/NODE JS/c. thirdNodeJs\pathModule.js"

/* ---::path.relative()::--- */
console.log(path.relative('C://orandea//test//aaa', 'C://orandea//impl//bbb')); // return "..\..\impl\bbb"

/* ---::path.resolve()::--- */
console.log(path.resolve(myPath, 'resolve.js')); // return "F:\NODE JS\c. thirdNodeJs\pathModule.js\resolve.js"
console.log(path.resolve(myPath, '/resolve.js')); // return "F:\resolve.js"

/* ---::path.sep::--- */
console.log(path.sep); // return "/"

/* ---::path.toNamespacedPath::--- */
console.log(path.toNamespacedPath(myPath)); // return "\\?\F:\NODE JS\c. thirdNodeJs\pathModule.js"

/* ---::path.win32::--- */
console.log(path.win32); // return all path module function and properties
