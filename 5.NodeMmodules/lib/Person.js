var EventEmitter=require('events').EventEmitter;
var util =require('util');

var Person=function(name){
    this.name=name;
    this.birthyear=function (age) {
        var datetime=new Date();
        return datetime.getFullYear()-age
      };
}; 

/**
 * we use inheritance with util module aid. this line of code shows Person would
 * have all of EventEmiter functionalities!
 */
util.inherits(Person,EventEmitter);

module.exports=Person;