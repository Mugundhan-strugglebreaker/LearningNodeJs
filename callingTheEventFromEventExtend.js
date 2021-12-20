var EventEmitter = require('events')

var Logger = require('./eventExtends')
var logger = new Logger()

logger.on("emitAnEvent",function(arg){
    console.log("Event Called ",arg)
})
logger.log("Message")