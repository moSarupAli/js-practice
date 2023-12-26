// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null; // null is null, it is completely empty, it isn't zero or undefined
let userEmail; // same as " let userEmail = undefined; "

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId); // false

const bigNumber = 36987542123568256325478932514978321n; // n at end for BigInt (Big Integer)



// Reference (Non primitive)

// 3 types: Array, Objects, Functions

const heros = ["srk", "Uttam Kumar", "Batman"];

let myObj = {
    name: "Sarup",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}


// console.log(typeof scoreValue, "\n", typeof bigNumber, "\n", typeof id, "\n", typeof outsideTemp);
// console.log("-----");
// console.log(typeof heros, "\n", typeof myObj, "\n", typeof myFunction);



// ***********************************

// Stack(for Primitive), Heap(for Non-Primitive)

// stack - call by value, gives copy of the value
// heap - call by reference, gives reference/location/address of the value

let myYoutubeName = "sarupmondaldotcom";

let anotherName = myYoutubeName;
anotherName = "chaiaurcode";

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "sarup@google.com";

console.log(userOne.email);
console.log(userTwo.email);