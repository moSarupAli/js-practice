// Immediately Invoked Function Expression (IIFE)

// function chai(){ // just a normal function
//     console.log(`DB CONNECTED`);
// };

// chai();


(function chai(){ // iife, in this case we have name of the function called "chai", so it is called "named iife"
    console.log(`DB CONNECTED`);
})();

(function chai(name){ // this is iife, in this case we have name of the function called "chai", so it is called "named iife", we can also pass parameter to iife
    console.log(`DB CONNECTED ${name}`);
})("sarup");


( () => { // iife using arrow function, in this case we don't have name of the function, so it is not named iife
    console.log(`DB CONNECTED TWO`);
})();

( (name) => { // this is iife using arrow function, in this case we don't have name of the function, so it is not named iife, we can also pass parameter to iife
    console.log(`DB CONNECTED TWO ${name}`);
})("ali");