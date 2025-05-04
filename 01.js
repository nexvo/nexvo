const { log } = require("console");
const fs = require("fs")


//reade json file 
const data =fs.readFileSync("./d-05/exmple_1.json.json", { encoding: "utf8"})
console.log(data);
let dataObj = JSON.parse(data)

console.log(dataObj);