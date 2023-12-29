// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
    if (greet == " ") continue;
    // if (greet == "!") break;
    // console.log(`Each char is ${greet}`);
}


// Maps

const myMap = new Map();

myMap.set('IN', "India");
myMap.set('USA', "United States of America");
myMap.set('Fr', "France");
myMap.set('IN', "India");


// console.log(myMap);


for (const key of myMap) {
    // console.log(key, typeof key);
}
for (const value of myMap) {
    // console.log(value, typeof value);
}
for (const gettingReturnFromMap of myMap) {
    // console.log(gettingReturnFromMap, typeof gettingReturnFromMap);
}

// Note: in case of "for of" loop form array, stirng, map (in gen. object) we are get return value of their corresponding element like in our ex- from array we are getting int number, from string we are getting character, from map we are getting key-value pair which is array AND in order to access key and value of array seperately we destructure it using [] syntax

for (const [key, value] of myMap) { // destructuring of array using [] syntax
    // console.log(key, typeof key, ':-', value, typeof value);
}
for (const [gettingKEYfromMap, gettingVALUEfromMap] of myMap) { // destructuring of array using [] syntax
    // console.log(gettingKEYfromMap, typeof gettingKEYfromMap, ':-', gettingVALUEfromMap, typeof gettingVALUEfromMap);
}

 


const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}

// for (const [key, value] of myObject) { // TypeError: myObject is not iterable, we can't iterate object in this way (using for of loop)
//     console.log(key, ':-', value);
// }