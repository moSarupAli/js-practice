// singleton
// Object.create



// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sarup",
    "full name": "Sarup Ali",
    // mySym: "myKey1",
    [mySym]: "myKey1",
    age: 18,
    location: "Kolkata",
    email: "sarup@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser);
// console.log(JsUser.email, typeof JsUser.email);
// console.log(JsUser["email"], typeof JsUser["email"]);
// console.log(JsUser["full name"], typeof JsUser["full name"]);
// console.log(JsUser.full name); // it's a error, as "full name" is given as string so in order to access it we have to use [""] format

// console.log(JsUser.mySym, typeof JsUser.mySym);
// console.log(JsUser[mySym], typeof JsUser[mySym]);

JsUser.email = "sarup@chatgpt.com";
// console.log(JsUser);
// Object.freeze(JsUser);
JsUser.email = "sarup@microsoft.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hell JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hell JS User, ${this.name}`);
}

console.log(JsUser);

console.log(JsUser.greeting());
// console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());