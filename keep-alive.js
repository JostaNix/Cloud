var http = require("http");
http.createServer(function(req, res){
res.write("Cloud"); 
res.end();
}).listen(8080);