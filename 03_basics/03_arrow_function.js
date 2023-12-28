// this and arrow function
// "this" indicates/refers to current context

const user = {
    username: "sarup",
    price: 999,

    welcomeMessage: function () {
        // this.username = "ali";
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();


// console.log(this);



// function chai(){ // function
//     let username = "sarup";
//     console.log(this.username);
//     console.log(this);
// }

// chai();




// const chai = function () { // function expression
//     let username = "sarup";
//     console.log(this.username);
//     console.log(this);
// }

// chai();



const chai = () => {  // arrow function
    let username = "sarup";
    console.log(this.username);
    console.log(this);
}

// chai();



// const addTwo = (num1, num2) => {  // arrow function
//     return num1 + num2;
// }
// console.log(addTwo(3, 4));



// const addTwo = (num1, num2) => num1 + num2; // implicite return, we use this  intensively in React
const addTwo = (num1, num2) => (num1 + num2); // implicite return, we use this  intensively in React

const giveMeObject = (num1, num2) => ({username: "sarup", job: "SWE"}); // implicite return, we use this  intensively in React

console.log(addTwo(3, 4));
