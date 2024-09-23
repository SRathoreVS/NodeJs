const fs = require('fs')

//asyn
console.log(fs.readFile('fsFile.txt','utf-8',(err,data)=>{
if(err){
    console.log(err);
    return ;
}
console.log(data);
}));



//sync
const fileContent  = fs.readFileSync('fsFile.txt','utf-8');
console.log(fileContent);


//----------------------------------------

//write file

//async
fs.writeFile('text.txt',"Subscribe to my channel",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("file returned suceesfully"); 
    
}) // file returned suceesfully

//sync
const sync  = fs.writeFileSync('text2.txt',"love you bebuu",'utf-8')

//------------------------------------------------------------------

//statistics

//async
fs.stat('fsFile.txt',(err,stats)=> {
    if(err){
        console.log(err);
        return;
    }
    console.log(stats);
    
})

//sync
const statSync = fs.statSync('fsFile.txt')
// console.log(statSync);






// Stats {
//     dev: 537957702,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: 4096,
//     ino: 844424930135103,
//     size: 39,
//     blocks: 8,
//     atimeMs: 1727065370335.9753,
//     mtimeMs: 1727064958941.7295,
//     ctimeMs: 1727064958941.7295,
//     birthtimeMs: 1727026153612.6123,
//     atime: 2024-09-23T04:22:50.336Z,
//     mtime: 2024-09-23T04:15:58.942Z,
//     ctime: 2024-09-23T04:15:58.942Z,
//     birthtime: 2024-09-22T17:29:13.613Z
//   }

//------------------------------------------------------------------

//make directory

//async
fs.mkdir('new_Directory',(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('directory created'); 
    
})//directory created

//to remove directory 
fs.rmdir('new_Directory',(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('directory removed'); 
    
}) // directory removed


//SYNC
const dirCreatSync = fs.mkdirSync('new_Directory2')

//----------------------------------------------------------------

//To delete the file 

//async
fs.unlink('file.txt',(err)=>{
    if(err){
        console.log(err)
    }
    console.log("deleted the file");
    
}) // deleted the file

//sync
fs.unlinkSync('text2.txt')
console.log("Done.....");
