var fs = require('fs')

fs.readFile('calc.js','utf-8',function(err,data){
    console.log(data)
})

fs.writeFile('newFile.js','console.log("Data")',function(err){
    console.log("data saved")
})

fs.appendFile('newFile.js','console.log("Data")',function(err){
    console.log("Data Appended")
})

fs.unlink('newFile.js',function(err){
    console.log('Deleted')
})

//function with Synchoronus
var file = fs.readdirSync('./')
console.log(file)

//same function with Asynchoronus
fs.readdir('./',function(err,files){
    if(err){
        console.log('Error = '+err)
    }else {
        console.log('Result = ',files)
    }
})