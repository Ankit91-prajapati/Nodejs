const http = require("http")
console.log("start")
const server =http.createServer((req ,res)=>{
    console.log("new print")
    res.end("hello world")
})
console.log("end")
server.listen(3000, ()=>{
    console.log("server started")
})
