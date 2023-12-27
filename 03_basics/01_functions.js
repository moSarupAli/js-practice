
function sayMyName() {
    console.log("s");
    console.log("a");
    console.log("r");
    console.log("u");
    console.log("p");
}

// sayMyName();


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

// addTwoNumbers(3, 4); // 7
// addTwoNumbers(3, "4"); // 34
// addTwoNumbers(3, "a"); // 3a

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);




function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a valid username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("sarup"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());