const os = require('os');

/* ---::os.arch()::--- */
console.log(os.arch()); // return "x64"

/* ---::os.constants::--- */
console.log(os.constants); // return object

/* ---::os.cpus()::--- */
console.log(os.cpus()); // return my my computer cores

/* ---::os.devNull::--- */
console.log(os.devNull); // return "\\.\nul"

/* ---::os.endianness()::--- */
console.log(os.endianness()); // return LE

/* ---::os.freemem()::--- */
console.log(os.freemem()); // return "6627745792"

/* ---::os.getPriority([pid])::--- */
console.log(os.getPriority(0)); // return 0
// console.log(os.getPriority(20)); // return "Node.js v19.3.0"

/* ---::os.homedir()::--- */
console.log(os.homedir()); // return "C:\Users\noomm"

/* ---::os.hostname()::--- */
console.log(os.hostname()); // return "Abdullah"

/* ---::os.loadavg()::--- */
console.log(os.loadavg()); // return [ 0, 0, 0 ]

/* ---::os.machine()::--- */
console.log(os.machine()); // return "x86_64"

/* ---::os.networkInterfaces()::--- */
console.log(os.networkInterfaces()); // return object

/* ---::os.platform()::--- */
console.log(os.platform()); // return "win32"

/* ---::os.release()::--- */
console.log(os.release()); // return "10.0.22000"

/* ---::os.setProperty()::--- */
os.setPriority(17); // return undefined

/* ---::os.getPriority()::--- */
console.log(os.getPriority()); // return "10"

/* ---::os.tmpdir()::--- */
console.log(os.tmpdir()); // return "C:\Users\noomm\AppData\Local\Temp"

/* ---::os.totalmem()::--- */
console.log(os.totalmem()); // return "12770697216"

/* ---::os.type()::--- */
console.log(os.type()); // return "Windows_NT"

/* ---::os.uptime()::--- */
console.log(os.uptime()); // return "1252713"
console.log(os.uptime(1252713)); // return "1252723.406"

/* ---::os.userInfo()::--- */
console.log(os.userInfo());
/* return {
  uid: -1,
  gid: -1,
  username: 'noomm',
  homedir: 'C:\\Users\\noomm',
  shell: null
} */

/* ---::os.version()::--- */
console.log(os.version()); // return "Windows 10 Pro"
