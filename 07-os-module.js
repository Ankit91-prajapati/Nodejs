let os = require('os')

console.log(os.uptime()) // it show system last reboot means shutdown or restart

console.log(os.machine())

const obj = {
    machineType:os.machine(),
    release:os.release(),
    freememo:os.freemem(),
    platform:os.platform(),
    totalmemo:os.totalmem(),
    userInfo:os.userInfo(),
    type:os.type(),
    hostName:os.hostname()
}
console.log(obj)