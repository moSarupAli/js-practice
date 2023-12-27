// const tinderUser = new Object(); // it's a "singleton" object, when we use new Object() constructor
const tinderUser = {}; // it's a "non-singleton" object, though both the syntax create same object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sarup",
            lastname: "mondal"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = {...obj1, ...obj2, ...obj4};


// console.log(obj1);
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "k@gmail.com"
    }
]

// console.log(users, typeof users);

// console.log(users[0], typeof users[0]);
// console.log(users[0].email, typeof users[0].email); 


// console.log(tinderUser);
// console.log(Object.keys(tinderUser), typeof Object.keys(tinderUser));
// console.log(Object.values(tinderUser), typeof Object.values(tinderUser));
// console.log(Object.entries(tinderUser), typeof Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'), typeof tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLog'), typeof tinderUser.hasOwnProperty('isLog'));



// +++++++++ Object Destructuring +++++

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(course.courseInstructor);

const {courseInstructor: instructor} = course; // Object Destructuring
console.log(instructor);



// +++++ JSON +++++
// {
//     "name": "sarup",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// randomuser me api, JSON formatter(see in code format, tree format, etc. format)

[
    {},
    {},
    {}
]
