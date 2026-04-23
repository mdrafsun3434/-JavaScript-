const numbers = [1, 2, 3, 4];

// const doubled = [];
// for (const num of numbers) {
//     doubled.push(num+2);
// }
// console.log(doubled);

// const doubleIt = num => (num + 3);
// const doubled = numbers.map(doubleIt);
// console.log(doubled);

const doubled = numbers.map(num => num * 2);
const square = numbers.map(num => num *num);
console.log(square);


const product =[
    {name:'laptop',price:45000},
    {name:'mobile',price:5000},
    {name:'tablet',price:4500},
];

const prices =product.map(product=>product.price*2);
console.log(prices);
