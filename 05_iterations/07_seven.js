const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// we want to add 10 to each element
// const newNums = myNumbers.map( (num) => (num + 10));

const newNums = myNumbers
                .map( (num) => num *10)
                .map( (num2) => num2 + 1)
                .filter( (num3) => num3 >= 40); // method chaining

console.log(newNums);