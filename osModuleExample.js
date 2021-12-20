var os = require('os')

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

//Templete String Printing we don't need any + concat Symbol
console.log(`Total Memory ${totalMemory}`)
console.log(`Free Memory ${freeMemory}`)


//with + Symbol
console.log('Total Memory : '+ totalMemory)
console.log('Free Memory : '+freeMemory)

