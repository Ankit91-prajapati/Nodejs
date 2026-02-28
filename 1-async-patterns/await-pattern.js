const {readFile ,writeFile} = require("fs").promises

// const getdata = (path)=>{
//    return(new Promise((resolve ,reject)=>{
//       readFile(path , "utf-8" , (err ,data)=>{
//         if(err){
//            reject(err) 
//         }
//         resolve(data)
//       })
//    }))
// }

// getdata("./content/second.txt").then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


async function readWrite (){
   const first = await readFile("./content/second.txt", "utf-8")
   const second = await readFile("./content/third.txt")
   console.log(first)
   await writeFile('./content/subfolder/text.txt', `New ${first}  ${second}`)
}

readWrite()
console.log("run first")

