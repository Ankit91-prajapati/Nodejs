const {readFileSync ,writeFileSync} = require("fs")
// console.log(fs)
console.log("start");
const text = readFileSync('./content/subfolder/text.txt' ,'utf-8')
console.log(text)

writeFileSync('./content/second.txt', `this is second time ${text}`)
console.log("end")

 writeFileSync("./content/bigfile.txt","Ankit Prajapati")


