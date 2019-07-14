const path=require('path');

console.log(path.basename(__filename));

var uploads=path.join(__dirname,'www','uploads');
console.log(uploads);

