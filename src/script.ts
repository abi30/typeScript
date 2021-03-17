
const country ="i love Bangladesh";

console.log(country);

let done :boolean = true;
let myNum:number=32;
let say: string="hello World";
console.log(say);

console.log(myNum);

let arr:string[]=["rakin","rakib","abddulla"];
let nameArray: Array<string>=["riak","suche","rakin"];
console.log(nameArray);

arr.forEach(vale=>{
    console.log(vale);
});


let myUnknownValue:any=1;
myUnknownValue="we are learning typescript";

console.log(myUnknownValue);

let myNumberArray:Array<number>=[32,43,12];
console.log(myNumberArray);
let myNumberArray2 :number[] =[32,56,76,3];
console.log(myNumberArray2)



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

    let y = i;

    myArray.push(()=> {

        console.log( i);

    })

}

for(let val of myArray){

    val();
   

}




let fname="IQIBL";
let multiLineStrings = `hello 
world
 my
  name
   is
    Mario ${fname}`;

console.log(multiLineStrings);



const hero = {
    first: 'Obi-Wan',
    last: 'Kenobi',
    age: 25
 };

 const a = hero.first;
const b = hero.last;
const c=hero.age;
console.log(a); // Obi-Wan
console.log(b); // Kenobi
console.log(c); // Kenobi

let playerName="rkaib";

console.log(playerName);


// playerName=43;
console.log(playerName);


