var spawn=require('child_process').spawn; // use to create child process
/**
 * it gets the command we want to run in the terminal 
 *  and a list of all we want to do after the command
 * with cp we will work with child process
 */
var cp=spawn("node",["alwaysTalking"]); 

cp.stdout.on('data',function(data){
    console.log(`LOG:${data.toString()}`);
});
cp.on('close',function() {
    console.log("Child process stopped!\n");
    process.exit();
});

setTimeout(() => {
    cp.stdin.write("exit");
}, 8000);