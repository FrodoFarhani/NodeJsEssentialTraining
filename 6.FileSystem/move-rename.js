var fs=require('fs');

fs.rename('./lib/Person.js','./Person-movedrenamed.json',function (err) { 
    console.log("done!"); 
 })

 /**
  * for removing file we use unlink. if we write our code sync it would directly
  * throw an error so we put it in try catch block
  */
try {
    fs.renameSync('./lib/check.js','./check.json');
    fs.unlinkSync('./check.json');
} catch (error) {
    console.log(error);
    
}
  