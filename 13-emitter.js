const event = require("events")

const createEvent =new event.EventEmitter()

createEvent.on("response" , ()=>{ //event create karna
    console.log("event creation")
})

createEvent.on("add" ,(num1 ,num2)=>{
   console.log(num1+num2)
})
createEvent.emit("response")
createEvent.emit("add" , 34,45) //emit means event karana
createEvent.emit("add", 34566,34566)