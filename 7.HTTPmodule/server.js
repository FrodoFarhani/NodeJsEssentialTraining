var http=require('http');

var server= http.createServer(function(req,res){
    
    
    res.writeHead(200,{"content-type":"text/plain"});
    res.end(`URL:${req.url}
    Method:${req.method}
`);
});
server.listen(3000);
console.log("server is running on port 3000");
