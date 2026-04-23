// const numbers =[1,2,3,4,5];
// const evenNumbers =numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// const friends =['Nahid','Nasib','karim','bokul'];
// const Nfriends =friends.filter(friend =>friend[0] ==='N');
// console.log(Nfriends);


// const student =[
//     {name:'Rahim',age:22},
//     {name:'Rahin',age:25},
//     {name:'Kahim',age:16},
//     {name:'Fahim',age:29},
//     {name:'Jahim',age:41},
// ];
// const olderStudent =student.filter(stu =>stu.age >25);
// console.log(olderStudent);

// Find ... 
// find er sorto sotto hole se shudhu prothom ta output dekhabe
const student = [
    { name: 'Rahim', age: 22 },
    { name: 'Rahin', age: 25 },
    { name: 'Kahim', age: 16 },
    { name: 'Fahim', age: 29 },
    { name: 'Jahim', age: 41 },
];
const olderStudent = student.find(stu => stu.name[0] === "F");
console.log(olderStudent);


// reduce 
const numbers = [1, 2, 3, 4, 15];
let sum =0;
for(const num of numbers){
    sum = sum +num;
}
// console.log(sum);
const total=numbers.reduce((acc,num) =>acc-num,0);
console.log(total); 