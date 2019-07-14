var fs=require('fs');
var path=require('path');

/* fs.readFile('./list.js','UTF-8',function (err,result) {
    if (err) {
        console.log(err);
        
    }  
    console.log(result);
}); */

fs.readdir('./lib',function (err,files) {
    if (err) {
        console.log(err);
    }

    files.forEach(filename => {
        console.log(filename);
        var filepath=path.join(__dirname,"lib",filename);
        var stats=fs.statSync(filepath);
        if (stats.isFile()) {
            fs.readFile(filepath,'utf-8',function (err,content) {
                console.log(content);
              });
        }
    });
/* 
    for ( var i in files) {
       
       var file=path.join(__dirname,"lib",files[i]);
       var stats=fs.statSync(file);
       if(stats.isFile() && files[i]!==".git"){
           fs.readFile(file,"utf-8",function (err,content) {
                if (err) {
                    console.log("can not read file:",files[i]);
                }
               // console.log(content);
                
             });
       }
        
    } */
  });