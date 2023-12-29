// forEach function


const coding = ["js", "ruby", "java", "python", "cpp"];


// coding.forEach(function (val) { // callBack function*****
//     console.log(val);
// });


/* function functionName(parameter){ // a normal function
    // functionBody
}

function (parameter) { // callBack function*****
    // functionBody
} */


// coding.forEach((val) => { // callBack function using arrow function&&&&&
//     console.log(val);
// });


/* const functionName = (parameter) => { // arrow function
    // functionBody
}

 (parameter) => { // callBack function using arrow function&&&&&
    // functionBody
} */

// Note: to define a callBack function we don't need to give name of the function


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe); // here printMe fn defined before i,t so we don't need to explictely call/execute the function, we just need to give the reference of the printMe fn



// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

myCoding.forEach((item) => {
    
    // console.log(item, item.languageName);
    // console.log(item, typeof item, item.languageName, typeof item.languageFileName);
})