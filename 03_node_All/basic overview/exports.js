// exports.sayHello = function(){
//     console.log("Heloo"); 
// }
// exports.sayThanks = function(){
//     console.log("thnaks");
// }

//------------------------------------------------------------------

// exports.sayHello = function(){
//     console.log("Heloo World"); 
// }

// module.exports.sayThanks = function(){
//     console.log("Thank You");
// }

// module.exports.sayBye = function(){
//     console.log("Bye Bye");
// }

// console.log(module);

// {
//     id: 'D:\\NodeJs\\03_node_All\\exports.js',
//     path: 'D:\\NodeJs\\03_node_All',
//     exports: {
//       sayHello: [Function (anonymous)],
//       sayThanks: [Function (anonymous)],
//       sayBye: [Function (anonymous)]
//     },

//---------------------------------------------------------------------

exports.sayHello = "hello World" 
function sayThanks(){
    console.log("Thank You");
}

module.exports = sayThanks

console.log(module); // TypeError: msg.sayHello is not a function
// {
//     id: 'D:\\NodeJs\\03_node_All\\exports.js',
//     path: 'D:\\NodeJs\\03_node_All',
//     exports: [Function: sayThanks],
//     filename: 'D:\\NodeJs\\03_node_All\\exports.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'D:\\NodeJs\\03_node_All\\node_modules',
//       'D:\\NodeJs\\node_modules',
//       'D:\\node_modules'
//     ]
//   }