let a = 100;
const b = 200;
var c = 600;

a = 350;
// b = 250; // we can't reassign "b" as "b" is constant variable

if (true) {
    let a = 10;
    const b = 20;
    var c = 60;

    a = 15;
    // b = 25; // we can't reassign "b" as "b" is constant variable

    // console.log("Inner a: ", a);
    // console.log("Inner b: ", b);
}


// console.log(a);
// console.log(b);
// console.log(c);


// ***** NOTE *****
// "let" and "const" have sence of scope.
// "var" does not have sence of scope.





function one() {
    const username = "sarup";

    function two() {
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);

    two();
}

// one();




if(true) {
    const username = "sarup";
    if(username === "sarup") {
        const website = "youtube";
        // console.log(username + website);
    }

    // console.log(website); 
}

// console.log(username);





// +++++++++++ interesting +++++++++++

console.log(addone(5)); // function hoisting (we can use a function before      defining it, though it is not applicable for function expression)
function addone(num) {
    return num + 1;
}



// addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization, as it's a function expression (we've assgined a function into a variable called addTwo)
const addTwo = function(num) {
    return num + 2;
}

addTwo(5);

