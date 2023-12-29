const userEmail = "s@sarup.ai";

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values
// false, 0, -0, bigInt 0n, "" - empty String, null, undefined, NaN

// truthy values
// "0", "false", " ", [] - empty array, {} - it's a empty object, function(){} - it's called empty fn

if (userEmail.length === 0) {
    console.log("String is empty");
}


const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator "??": works on null, undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);



// Ternary Operator
// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");