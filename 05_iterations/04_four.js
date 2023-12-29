// for in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
}


for (const key in myObject) {
    // console.log(`"${key}" is shortcut for "${myObject[key]}"`);
}


const arr = [9, 8, 3, 4, 5];

for (const key in arr){
    // console.log(`key is ${key} and value is ${arr[key]}`);
}




// const myMap = new Map();

// myMap.set('IN', "India");
// myMap.set('USA', "United States of America");
// myMap.set('Fr', "France");
// myMap.set('IN', "India");

// for (const key in myMap) {
//     console.log(key); // no output as Map is "not iterable in this way"
//  }