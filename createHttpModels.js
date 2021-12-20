// We need a Http Module for running Http Request
var http = require('http')

http.createServer(function(req,res){
    if(req.url === '/'){
     res.write("Welcome Mugundhan For Nodejs World")
     res.end()
    }
    if(req.url == '/users'){
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }
}).listen(9000)