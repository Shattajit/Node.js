console.clear();

console.log("hello");

const collect = require('./index2');

console.log(collect);
console.log(collect.f1());
console.log(collect.f2());

const {f1} = require('./index2');

console.log(f1());


module exports = {
    
}