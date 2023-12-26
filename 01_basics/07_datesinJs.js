// Dates

let myDate = new Date();
// console.log(myDate, typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date(2023, 0, 23, 15, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now() / 1000);
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time...`

// "ctrl + space" to get seggestion(thanks to intelliSence)
newDate.toLocaleString('default', {
    weekday: "long",
    
})


// seen in a shorts
/* function isEven(num) {
    return !! (num % 2 === 0); // !!(num % 2 === 0): The double exclamation marks (!!) are used to convert the result of the equality check to a boolean. This is a common JavaScript idiom for converting truthy/falsy values to true/false. In this case, it ensures that the function always returns a boolean value (true for even numbers and false for odd numbers)
}

console.log(isEven(6)); */

