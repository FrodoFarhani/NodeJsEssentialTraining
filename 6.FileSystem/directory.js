var fs=require('fs');

/**
 * we use existsSync to check if the directory exists and
 *  mkdir for creating new directory
 */
if (fs.existsSync("dir")) {
    console.log("Alredy have one...!");

}else{
    fs.mkdir('dir',function (err) {
        if(err){
            console.log(err);  
        }
        console.log("directory created!"); 
      });
}
