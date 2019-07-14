var timeout=3000;
var currenttime=0;
var interval=10; // this cuase our interval to run 10 times in a second
var waitedpercent=0;

function writePercent(p){
    process.stdout.clearLine(); // will delete the last line
    process.stdout.cursorTo(0); // will go to the first line
    process.stdout.write(`waiting ... ${p}%`);
}

/**
 * by using set interval out app will not stop until we stop it with clearInterval
 */
var ourinterval=setInterval(() => {
    currenttime+=interval;
    waitedpercent=Math.floor((currenttime/timeout)*100);
    writePercent(waitedpercent);
    //console.log(`waiting ${currenttime/1000} seconds....`);
    
}, interval);

setTimeout(() => {
    clearInterval(ourinterval);
    writePercent(100);
    console.log("\ndone!");    
}, timeout);

writePercent(0);