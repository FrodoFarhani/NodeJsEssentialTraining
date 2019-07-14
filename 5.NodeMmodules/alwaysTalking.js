var sayings=[
    "sayings 1",
    "sayings 2",
    "sayings 3",
    "sayings 4",
    "sayings 5",
    "sayings 6",
    "sayings 7",
    "sayings 8",
    "sayings 9",
    "sayings 10"
];
var interval=setInterval(() => {
    var i=Math.floor(Math.random() * sayings.length);
    process.stdout.write(`${sayings[i]}\n`);
}, 2000);
process.stdin.on('data',function(data){
    if (data.toString().trim()=="exit") {
        process.stdout.write(`Message recieved is :${data.toString().trim()}\n`); 
        clearInterval(interval);
        process.stdout.write("Process finished!\n\n");
        process.exit();
    }else{
        process.stdout.write(`Message recieved is :${data.toString().trim()}\n`); 
        process.stdout.write("Please write 'exit' to finish the app!\n");
    }
});