var https=require('https');

module.exports={
    printName(object){
        return object.last +" "+object.first;
    },
    loadWiki(object,cb){
        var url=`https://en.wikipedia.org/wiki/${object.first}_${object.last}`;
        https.get(url,function (res) {
            var body="";
            res.setEncoding('UTF-8');
            res.on('data',function (chunk) {
                 body+=chunk;   
              });
            res.on('end',function () {
                 cb(body);
              });
         });
    }
};