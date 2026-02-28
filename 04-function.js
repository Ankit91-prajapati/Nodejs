//importing values and using it

const {firstName ,lastName} = require("./03-name")

  // console.log(data)

 const printInfo = ()=>{
  console.log(` my name is ${firstName} ${lastName}`)
}
module.exports = printInfo