// reduce()

const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} and current value: ${currentValue}`);
//     return accumulator + currentValue;
// }, 0);

// const myTotal = myNums.reduce( (accumulator, currentValue) => {
//     console.log(`accumulator: ${accumulator} and current value: ${currentValue}`);
//     return accumulator + currentValue;
// }, 0);

const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

// we want to add all the price
const priceToPay = shoppingCart.reduce( (acc, item) => ( acc + item.price), 0);

console.log(priceToPay);