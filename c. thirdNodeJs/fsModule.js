const fs = require('fs');

/* ---::fs.writeFileSync()::--- */
fs.writeFileSync('modFsSync.txt', 'Hello Bnaglar Programmer.');

/* ---::fs.appendFileSync()::--- */
fs.appendFileSync('modFsSync.txt', ' How Are You?');

/* ---::fs.readFileSync()::--- */
const syncData = fs.readFileSync('modFsSync.txt');
// console.log(syncData); // return buffer data type;
console.log(syncData.toString());

/* ---::fs.deleteFileSync()::--- */
fs.writeFileSync('mod.txt', 'I Delete this file.');
setTimeout(() => {
    fs.unlinkSync('mod.txt');
}, 5000);

/* ---::fs.renameFileSync()::--- */
fs.renameSync('modFsSync.txt', 'modFsSync2.txt');
setTimeout(() => {
    fs.renameSync('modFsSync2.txt', 'modFsSync.txt');
}, 5000);

/* ----------------------------
::::USE ASYNCHRONOUS SYSTEM::::
---------------------------- */
const fsAsync = require('fs');

/* ---::fs.writeFile()::--- */
fsAsync.writeFile('modeFsAsync.txt', 'Hello NodeJs AsyncFile.', (err, _data) => {
    if (err) throw err;
    console.log(
        // eslint-disable-next-line prettier/prettier, comma-dangle
        _data === undefined ? 'Your File are created!!!' : 'Sorry, your file are not created!!!'
    );
});

/* ---::fs.appendFile()::--- */
fsAsync.appendFile('modeFsAsync.txt', ' New Text Are Added!!', () => {
    console.log('Append new Text are success!');
});

/* ---::fs.readFile()::--- */
fsAsync.readFile('modeFsAsync.txt', (_err, _data) => {
    if (_err) throw _err;
    console.log(_data.toString());
});

/* ---::fs.unlinkFile()::--- */
fs.writeFile('modAsync.txt', 'Use for delete', () => {
    console.log('Delete file created!!');
});
setTimeout(() => {
    fsAsync.unlink('modAsync.txt', (_err, _data) => {
        console.log(_data === undefined ? 'File are deleted' : 'Not delete');
    });
}, 5000);

/* ---::fs.renameFile()::--- */
fs.rename('modeFsAsync.txt', 'modeFsAsyncRename.txt', () => {
    console.log('File name are change');
});
setTimeout(() => {
    fs.rename('modeFsAsyncRename.txt', 'modeFsAsync.txt', () => {
        console.log('rename file name are changed!');
    });
}, 7000);
