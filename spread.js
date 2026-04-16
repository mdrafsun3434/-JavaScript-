const max =Math.max(3,5,2,6,9,1)
// console.log(max);

const numbers =[3,4,7,9,5,1];
const max2 = Math.max(...numbers);
console.log(...numbers);


const array1 = [1,2,3,4]
const array2 = array1;
array1.push(5);
console.log(array1);
console.log(array2);

const array3 = [1,2,3,4];
const array4 = [...array3];
array4.push(5);
console.log(array3);
console.log(array4);


const person ={name:'Alice', age: 30};
// const person2 = person;
const person2={...person};
person.salary =36000;
console.log(person);
console.log(person2);