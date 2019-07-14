var http=require('http');
var fs=require('fs');

http.createServer(function (req,res) {

    if(req.method==="GET"){
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream('./public/index.html','UTF-8').pipe(res);
    }else if(req.method==="POST"){
        var body="";
        req.on("data",function (chunk) {
            body+=chunk;
          });
        req.on("end",function () {
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                <meta charset="UTF-8">
                <title>DATA just posted</title>
            </head>
            <body>
                ${body}
            </body>

            </html>
            `)
          });
    }

}).listen(3000);
console.log("server is running on port 3000");