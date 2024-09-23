const os = require("os")
console.log(os.freemem()); //895131648

console.log(os.arch()); //x64

console.log(os.userInfo());
// {
//     uid: -1,
//     gid: -1,
//     username: 'satya',
//     homedir: 'C:\\Users\\satya',
//     shell: null
//   }

const obj = {
    type: os.type(),
    user: os.userInfo(),
    release: os.release(),
    free : os.tmpdir()
}

console.log(obj);
// {
//     type: 'Windows_NT',
//     user: {
//       uid: -1,
//       gid: -1,
//       username: 'satya',
//       homedir: 'C:\\Users\\satya',
//       shell: null
//     },
//     release: '10.0.22631',
//     free: 'C:\\Users\\satya\\AppData\\Local\\Temp'
//   }