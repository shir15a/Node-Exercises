const fs = require('fs')
//1
fs.writeFileSync('newText.txt', '');
//2
fs.copyFileSync('newText.txt', 'newTextCopy.txt');
//3
fs.renameSync('newText.txt', 'newTextRename.txt' );
//4
console.log(fs.readdirSync('./'));
//5
fs.mkdirSync('./newFolder')

