const http = require("http")
const {readFileSync} = require("fs")
const path = require("path")
console.log(__dirname)
const server = http.createServer((req ,res)=>{
   
    if(req.url == "/"){
         const home = readFileSync(path.join(__dirname ,"static", "index.html"), "utf-8")
        res.writeHead(200,{"content-type":"text/html"})
        res.end(home)
    }
    if(req.url == "/index.html"){
         const home = readFileSync(path.join(__dirname ,"static", "index.html"), "utf-8")
        res.writeHead(200,{"content-type":"text/html"})
        res.end(home)
    }

    if(req.url == "/style.css"){
            const css = readFileSync(path.join(__dirname ,"static", "style.css"), "utf-8")
             res.writeHead(200,{"content-type":"text/css"})
        res.end(css)
    }

      if(req.url == "/about.html"){
            const about = readFileSync(path.join(__dirname ,"static", "about.html"), "utf-8")
             res.writeHead(200,{"content-type":"text/html"})
        res.end(about)
    }

      if(req.url == "/services.html"){
            const services= readFileSync(path.join(__dirname ,"static", "services.html"), "utf-8")
             res.writeHead(200,{"content-type":"text/html"})
        res.end(services)
    }
    
})

server.listen(4000,()=>{
    console.log("server started.....")
})