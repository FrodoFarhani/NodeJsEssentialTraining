var fs=require('fs');

var md=`
Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
 sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

fs.writeFile('sample.txt',md.trim(),function (err) {  
    console.log("Here is the sample!");
    
});
/** we can ommit call back function, if we need to do something
 * after for ex appendFile finished we can use that in other situations we can 
 * delete it....
 */
fs.appendFile('sample.txt',`\n****** this is appended******\n`,function (err) {
    console.log("append Done!");
    
  });
fs.readFile('./sample.txt','utf-8',function (err,content) {
    console.log(content);
    
});