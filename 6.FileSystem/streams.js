var fs=require('fs');

/**
 * for very large files the issue is typical reading file with fs would be wait until the
 * hole file to be read then do sth.... and also buffers a big file in a variable so in
 * the case of high TPS it would cuase issues like lack of memmory or latancy
 */
/* fs.readFile('./chat.log','utf-8',function (err,content) {
    console.log(`file readed : ${content.length}`);
  });
console.log("reading file...."); */

var stream=fs.createReadStream('./chat.log','utf-8');
var writestream=fs.createWriteStream('./sample.txt');

var data="";

stream.once('data',function () {
    console.log("\n\n Reading Stream Starded !\n\n");
});
stream.on('data',function (chunk) {
        console.log(`CHUNCK:${chunk.length} | `);
        
        writestream.write(chunk);
        
        data+=chunk;

  });
stream.on('end',function () {
    writestream.close();
    console.log("\n\n Reading Stream finished !\n\n");
    console.log(`Data length: ${data.length}`);
    
  })
