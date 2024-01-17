const user = { // Object literals - means literally creating a object
    username: "Sarup",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${username}`); // ReferenceError: username is not defined
        // console.log(`Username: ${this.username}`);
        console.log(this); // "this" - refers current context / scope, here inside the "user" object
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); // "this" - refers current context / scope, here inside the "global" contex, o/p: is empty object



// const promiseOne = new Promise();
// const data = new Date();


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

// const userOne = User("Sarup", 12, true);
// const userTwo = User("Ali", 11, false);
const userOne = new User("Sarup", 12, true);
const userTwo = new User("Ali", 11, false);

// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);