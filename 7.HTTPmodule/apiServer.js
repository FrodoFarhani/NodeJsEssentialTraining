var http=require('http');
var data=require('./data/inventory');

http.createServer(function (req,res) {
   
    switch (req.url) {
        case "/":
            res.writeHead(200,{"Content-Type":"text/json"});
            res.end(JSON.stringify(data));
            break;
        case "/instock":
            dataInStock(res);
            break;
        case "/inorder":
            dataInBackOrder(res);
            break;
        default:
            res.writeHead(404,{"Content-Type":"text/plain"});
            res.end("No data found !");
            break;
    }

  }).listen(3000);
  console.log("server is running on port 3000");

function dataInStock(res) {
    var instock=data.filter(function(item) {
       return item.avail ==="In stock"; 
    });
    res.end(JSON.stringify(instock));
}
function dataInBackOrder(res) {
    var inBackOrder=data.filter(function(item) {
       return item.avail ==="On back order"; 
    });
    res.end(JSON.stringify(inBackOrder));
}
  