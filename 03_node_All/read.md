# Three Types of Node.js Modules

## 1. Core Modules
Node.js has many built-in modules that are part of the platform and come with Node.js installation. These modules can be loaded into the program by using the `require` function.

- `http`: Creates an HTTP server in Node.js.
- `assert`: Set of assertion functions useful for testing.
- `fs`: Used to handle the file system.
- `path`: Includes methods to deal with file paths.
- `process`: Provides information and control about the current Node.js process.
- `os`: Provides information about the operating system.
- `querystring`: Utility used for parsing and formatting URL query strings.
- `url`: Provides utilities for URL resolution and parsing.

**Syntax:**

```javascript
const module = require('module_name');``

## 2. Local Modules in Node.js

Local modules are modules that are created locally within your Node.js application. These modules are typically designed to perform specific tasks, such as calculations, file manipulations, etc., and can be imported into other files within your project.

## Example: Creating a Simple Calculator Module

Let's create a simple calculator module that can perform basic arithmetic operations.

### 1. Define the Calculator Module

Create a file named `calc.js` with the following code:

```javascript
// Filename: calc.js

exports.add = function (x, y) {
    return x + y;
};

exports.sub = function (x, y) {
    return x - y;
};

exports.mult = function (x, y) {
    return x * y;
};

exports.div = function (x, y) {
    return x / y;
};
```javascript 
// Filename: index.js

const calculator = require('./calc');

let x = 50, y = 10;

console.log("Addition of 50 and 10 is " + calculator.add(x, y));
console.log("Subtraction of 50 and 10 is " + calculator.sub(x, y));
console.log("Multiplication of 50 and 10 is " + calculator.mult(x, y));
console.log("Division of 50 and 10 is " + calculator.div(x, y));
```



### 2. `third-party-modules.md`

```markdown
# Third-party Modules in Node.js

Third-party modules are modules that are not included in the Node.js core and are available online through the Node Package Manager (NPM). These modules can be installed and used to enhance your Node.js application by adding functionality such as database interaction, server frameworks, utility libraries, and more.

## Installing Third-party Modules

To install a third-party module, use the `npm install` command followed by the module name. Modules can be installed:

- **Locally** (for use within the current project)
- **Globally** (available system-wide)

### Example: Installing Express Locally

To install Express in your project directory, use:

```bash
npm install express
npm install react
```


``` javascript 
module.exports = abc ```
in the end it creates an object only ```


### Exports Vs Module.exports

## Exports : always takes the reference of the data , not the orignal data 
## module : always choosen above exports as it takes all the data as in object form and easy to export the variables or functions


* use .mjs for ES module type export instead of .js *