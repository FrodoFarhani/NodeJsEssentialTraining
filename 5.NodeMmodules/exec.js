/**
 * we can use xec to execute child processes and commands, exec method structure is 
 * shown in bellow code... it gets a command and in callback function would return
 * error and the result of the command
 */
var exec=require('child_process').exec;

exec('dir',function (err,stdout) { 
    if (err) {
        throw err;
    }
    console.log(stdout);
 });
 exec('git version',function (err,stdout) { 
    if (err) {
        throw err;
    }
    console.log(stdout);
 });