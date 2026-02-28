const http =require("http")

const server = http.createServer()
server.on("request" ,(req ,res)=>{res.end("event happen")})
server.listen(4000,()=>{
    console.log("server running")
})

