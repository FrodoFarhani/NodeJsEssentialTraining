var express=require('express');
var cors=require('cors');
var bodyParser=require('body-parser');

var app=express();
var dictionary=[
    {
        term:"salam",
        defined:"hello"
    },
    {
        term:"khodafez",
        defined:"bye"
    },
    {
        term:"to",
        defined:"you"
    },
    {
        term:"bia",
        defined:"come"
    }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));// extended:true if we have large url and many parameters

app.use(function (req,res,next) {
    console.log(`${req.method} is called for ${req.url} - ${JSON.stringify(req.body)}\n`);
    next();
  });
 
//All files in public path would be served on port 3000
app.use(express.static('./public'));

/**
  * we use cors module for cross-origin use of our apis, this means if we have our app in a domain
  * and our apis on another domain our application can still work
  */
 app.use(cors());

app.get('/dictionary',function (req,res) {
    res.json(dictionary);
});
app.post('/dictionary',function (req,res) {
    dictionary.push(req.body);
    res.json(dictionary);
});
app.delete('/dictionary/:term',function (req,res) {
   dictionary=dictionary.filter(function (defenition) {
       return defenition.term.toLowerCase() !== req.params.term.toLowerCase();
     });
     res.json(dictionary);
});

app.listen(3000);

console.log("app is running on port 3000");

//we can use app in other files
module.exports=app;
