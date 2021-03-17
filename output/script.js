"use strict";
var country = "i love Bangladesh";
console.log(country);
var done = true;
var myNum = 32;
var say = "hello World";
console.log(say);
console.log(myNum);
var arr = ["rakin", "rakib", "abddulla"];
var nameArray = ["riak", "suche", "rakin"];
console.log(nameArray);
arr.forEach(function (vale) {
    console.log(vale);
});
var myUnknownValue = 1;
myUnknownValue = "we are learning typescript";
console.log(myUnknownValue);
var myNumberArray = [32, 43, 12];
console.log(myNumberArray);
var myNumberArray2 = [32, 56, 76, 3];
console.log(myNumberArray2);
// var greeting = "Hello There";
// function hello() {
//    for (var i = 0; i < 5; i++) {
//        var greeting = "Ah the negotiator";
//    }
//    console.log(greeting);
// }
// hello();
// var greeting1 = "Hello There";
// function hello1() {
//    for (var i = 0; i < 5; i++) {
//        let greeting1 = "Ah the negotiator";
//    }
//    console.log(greeting1);
// }
// hello1();
var myArray = [];
for (var i = 0; i < 10; i++) {
    var y = i;
    myArray.push(function () {
        console.log(i);
    });
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var val = myArray_1[_i];
    val();
}
var fname = "IQIBL";
var multiLineStrings = "hello \nworld\n my\n  name\n   is\n    Mario " + fname;
console.log(multiLineStrings);
var hero = {
    first: 'Obi-Wan',
    last: 'Kenobi',
    age: 25
};
var a = hero.first;
var b = hero.last;
var c = hero.age;
console.log(a); // Obi-Wan
console.log(b); // Kenobi
console.log(c); // Kenobi
var playerName = "rkaib";
console.log(playerName);
// playerName=43;
console.log(playerName);
