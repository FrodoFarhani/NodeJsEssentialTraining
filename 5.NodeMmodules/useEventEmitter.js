/* var EventEmitter=require('events').EventEmitter;
var util =require('util');

var Person=function(name){
    this.name=name;
    this.birthyear=function (age) {
        var datetime=new Date();
        return datetime.getFullYear()-age
      };
}; */

/**
 * we use inheritance with util module aid. this line of code shows Person would
 * have all of EventEmiter functionalities!
 */
//util.inherits(Person,EventEmitter);

/**
 * we remove above lines to use person as a resuable module. u can find persion in lib
    with this trick we can have many instanses of Person...
 */

var Person=require('./lib/Person');
 var ben = new Person('Benjamin');
var george = new Person('George');


ben.on("speak",function (message) {
        var birthyear=ben.birthyear(33);
        console.log(`Birth On : ${birthyear},${this.name} said :${message}\n`);
  });
ben.emit("speak","there is no time to rest!");


george.on("speak",function (message) {
    var birthyear=ben.birthyear(53);
    console.log(`Birth On : ${birthyear},${this.name} said :${message}\n`);
});
george.emit("speak","No place for loosers!");