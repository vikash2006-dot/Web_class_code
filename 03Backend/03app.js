// let a=3
// let b=4
// let fetch=require("./03calculator.js");
// console.log(fetch.add(a,b));
// console.log(fetch.sub(a,b));
// console.log(fetch.mul(a,b));
// console.log(fetch.div(a,b));

import {add,sub} from "./03calculator.js"
console.log(add(2,3));

// commomjs -> works synchronously
// ESMjs -> works Asynchronously