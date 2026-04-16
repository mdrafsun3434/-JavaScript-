// const employee ={
//     name:'John ',
//     1:'desk one',
//     position:'software Engineer'
// };

// console.log(employee.name);
// console.log(employee[1]);


const employee ={
    name:'John ',
    1:'desk one',
    position:'software Engineer',
    salary:80000,
    family:{
        father:'Don',
        mother:{
            name:'kapoor',
            age:44,
        }
    },
};

console.log(employee.family.mother?.name?.salary)
