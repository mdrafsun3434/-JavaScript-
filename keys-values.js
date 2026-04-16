// const king ={name:'Rafsun',age:55,kingdom:'pride lands'};
// const keys=Object.keys(king);
// const values=Object.values(king);
// const entries = Object.entries(king);
// console.log(entries);


// freeze---
const king ={name:'Rafsun',age:55,kingdom:'pride lands'};
// Object.freeze(king);
Object.seal(king);
delete king.age;
delete king.kingdom;
king.queen ="Uganda"
console.log(king);