var EventEmitter = require('events')

class Logger extends EventEmitter{
    log(message){
        console.log(message)
        this.emit('emitAnEvent',{ id : 84 , Name : 'Mugundhan'})
    }
}
module.exports = Logger