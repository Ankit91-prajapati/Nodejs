const path = require("path")

let filepath =path.join("/content" , 'subfolder' , 'text.txt') //it  join all path
console.log(filepath)

console.log(path.basename(filepath)) // file name of path means text.txt

console.log(path.resolve('content' ,'subfolder' ,"text.txt")) //it give absolute path and attach content , subfolder ,text.txt