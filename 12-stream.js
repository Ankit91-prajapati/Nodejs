const {createReadStream ,createWriteStream} =require("fs")

const stream =createReadStream("./content/bigfile.txt",{encoding:"utf-8"},{highWaterMark:1024}) //data chunk me aana
// const stream = createReadStream("./content/bigfile.txt",{highWaterMark:1024}) //high water mark mean size data 1024 - 1kB

stream.on('data' ,(result)=>{ //means jab data event hoga to function chala dena 
    console.log(result)
})

stream.on('error', (error)=>{
    console.log(error)
})


const writestream = createWriteStream("./content/write.txt")
writestream.write("hello stream")