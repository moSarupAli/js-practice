const name = "sarup";
const repoCount = 50;

// console.log(name + repoCount + "value"); // old syntax

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`); // new syntax, prefered way to display string

const gameName = new String('sarup-md-com');

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, 6);
console.log(anotherString);

const newStringOne = "     Sarup  Ali     ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trims space from start and end of the string

const url = "https://sarup.com/sarup%20ali";

console.log(url.replace('%20', '-')); // replace "$20" with "-" in the string

console.log(url.includes('sarup')); // checkes if 'sarup' exist/inclue in the string or not, returns in boolean true or false
console.log(url.includes('sundar'));

console.log(gameName.split('-'));