let fs=require("fs");
// console.log(fs);

let result= fs.readFileSync('04file.txt',"utf8");
console.log(result);      