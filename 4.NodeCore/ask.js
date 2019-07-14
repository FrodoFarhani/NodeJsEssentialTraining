var questions=[
    "Name?",
    "Hobby?",
    "Programming lang?"
];
var answers=[];

function ask(i){
    process.stdout.write(`\n\n ${questions[i]} >`);
}

process.stdin.on('data',function(data){
    answers.push(data.toString().trim());
    process.stdout.write(`\n\n`);

    if(answers.length<questions.length){
        ask(answers.length);
        process.stdout.write(`\n\n`);
    }else{
        process.exit();
    }
});

process.on('exit',function(){
    console.log(answers);
    
});
ask(0);