function getVar(flag){
    var index=process.argv.indexOf(flag);
    return index===-1 ? null : process.argv[index+1];
}

var user= getVar("--user");
var greeting=getVar("--greeting");

if(!user && !greeting){
    console.log("Nothing to show !");   
}else{
    console.log(`Wellcome ${user},${greeting}`);
}