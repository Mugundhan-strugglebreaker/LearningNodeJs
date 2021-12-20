var EmitterEvent = require('events')
// Emiiter is a class
const emitterObj = new EmitterEvent()

//Register an Event
emitterObj.on("EmitEvent",function(){
    console.log("Event Raised")
})

//An Event with Passing Arguments
emitterObj.on("EventWithArgument",(arg)=>{
    console.log(arg)
})

//user emit an event means raise an event
emitterObj.emit("EmitEvent")

//raise an event with arguments
emitterObj.emit("EventWithArgument",{ id : 1, Name : 'Mugundhan'})
