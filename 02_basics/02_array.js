const marvel_heros = ["thor", "Ironmna", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // Appends new elements to the end of an array, and returns the new length of the array. It changes/modifies the existing array.

// console.log(marvel_heros, marvel_heros.length);
// console.log(marvel_heros[1], marvel_heros[2], marvel_heros[3]);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros); // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(marvel_heros);
// console.log(allHeros);

// now better way of doing same, use of "spread operator(...)"
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros, typeof all_new_heros, all_new_heros.length);



// Flattening an array
const another_array = [1, 2, 3, [4, 5, 6], 7, [4, 5]];

// const real_another_array = another_array.flat(1); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth (hera up to 1 depth).
const real_another_array = another_array.flat(Infinity); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth (here up to Infinity depth).
// console.log(real_another_array);




// console.log(Array.isArray("sarup")); // false
// console.log(Array.isArray(["sarup"])); // true

// converting string to array
console.log(Array.from("sarup"));
console.log(Array.from({name: "sarup"})); // intersting for interview question, here we have to specify what we want to convert as array "key or value" of a particular object. Expected o/p: empty array, as we have not mentioned key or value
console.log(Array.from({})); // Expected o/p: empty array, as it's a empty object


// converting multiple variables to array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements(here variables). parameter — A set of elements to include in the new array object.