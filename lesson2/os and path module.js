const os = require('os'); 

console.log(os.userInfo());

console.log(os.totalmem());

console.log(os.freemem());

console.log(__dirname);
console.log(__filename);

const path = require("path");

const joinName = path.join(__dirname, "/views");

console.log(joinName);

const joinName2 = path.join(__dirname, "/../views");

console.log(joinName2);