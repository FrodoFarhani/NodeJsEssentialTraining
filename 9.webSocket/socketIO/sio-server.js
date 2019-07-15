var express=require('express');
var http=require('http');
var app=new express();
var server = http.createServer(app).listen(3000);
var io=require('socket.io')(server);

app.use(express.static('./public'));

io.on("connection",function (socket) {
        
        socket.emit('message','Connected to cyberChat...');
        
        socket.on('chat',function (message) {
                socket.broadcast.emit('message',message);
          });
  });

  console.log("Socket app is running on port 3000");
  