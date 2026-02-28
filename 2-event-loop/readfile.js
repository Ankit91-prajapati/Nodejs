const{readFile} =require("fs")
console.log("started")
readFile('./content/subfolder/text.txt' ,'utf-8' , (err ,data)=>{
    if(err) console.log(err)
    console.log(data)
   console.log("tast completed")
})

console.log("end")