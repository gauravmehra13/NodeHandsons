const http = require('http');

http.createServer(function(req,res){
    res.write('<h1>Enter user details</h1>');

    const details = {
        Name: "Gaurav",
        Age: "25"
    }
    const jsonContent = JSON.stringify(details)

    res.end(jsonContent);
}).listen(5500);