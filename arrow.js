// function declaration
console.log(add(10,20));
function add(num1, num2){
    return num1 + num2;

}

// function expression 
const add2 = function(num1,num2){
    return num1*num2;
}
console.log(add2(10,20));

// arrow function 
const add3 = (num1,num2)=>num1+num2;
console.log(add3(50,60));

const doMath =(x, y) => {
    const sum = x + y;
    const diff = x - y;
    return {sum,diff};
}
console.log (doMath(10,20));

const divide = (p,q)=> p/q;
console.log(divide(10,10));                             