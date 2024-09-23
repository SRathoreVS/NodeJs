const path = require("path")
console.log(__filename); //D:\NodeJs\03_node_All\Built-In-Module\path2.js

console.log(path.basename(__filename)); //path2.js

console.log(path.extname(__filename)); //.js

console.log(path.join('/hello','/hello','file.txt')); // \hello\hello\file.txt

console.log(path.resolve('/hello1','/hello2','file.txt')); // D:\hello2\file.txt 
//(in the given example, '/hello1' is the 1st arg and simnce its an absolute path so it becomes the starting point , then '/hello2' is next arg and replaces the 1st arg and so become the starting point)

console.log(path.resolve('hello1','hello2','file.txt')); // if no slashes are given then , O/P : D:\NodeJs\03_node_All\Built-In-Module\hello1\hello2\file.txt

console.log(path.resolve('hello1','//hello2','file.txt'));//2 backslashes used (more slashes more priority), O/P : D:\hello2\file.txt

console.log(path.resolve('hello1','hello2','../file.txt')); // backpage .. used , O/P : D:\NodeJs\03_node_All\Built-In-Module\hello1\file.txt


const pathProps = path.parse('/foo/bar/node.js')
console.log(pathProps);
// ({
//     root: '/',
//     dir: '/foo/bar',
//     base: 'node.js',
//     ext: '.js',
//     name: 'node'
//   })