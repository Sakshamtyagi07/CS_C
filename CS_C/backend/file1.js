const fs = require("fs");
const data = fs.readFileSync("./data.txt","utf8");
console.log(data);
if(data.match("H")){
    console.log("H is present")
    const newdata = data.replace("H","AB")
    fs.writeFileSync("./data.txt",newdata ,"utf8");
}
// fs.writeFileSync("./data1.txt","Hello,this is my new work","utf8");
// fs.writeFileSync("./data1.txt","ABES","utf8");
// fs.appendFileSync("./data1.txt"," Engineering College","utf8");
// fs.renameSync("./data2.txt","./data3.txt");