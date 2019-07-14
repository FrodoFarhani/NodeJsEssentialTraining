var https=require('https');
var fs= require('fs');

var stream=fs.createWriteStream('./sampleRequest.html');
var options={
    hostname:"en.wikipedia.org",
    port:443,
    path:"/wiki/George_Washington",
    method:"GET"
};

var req=https.request(options,function (res) {
       
        var responseBody="";
        console.log("Request started!\n");
        console.log(`Status:${res.statusCode}`);
        console.log("Response headers:%j",res.headers);
        
        res.setEncoding('UTF-8');

        res.once('data',function (chunk) { 
            console.log(chunk);
         });
        res.on('data',function (chunk) {
            console.log(`--chunk : ${chunk.length}`);
            responseBody+=chunk;
            stream.write(responseBody);
          });
        res.on('end',function () {
            stream.close();
            console.log("file downloaded!");           
          });
  });
req.on("error",function (err) {
      console.log(err);
    });
req.end();