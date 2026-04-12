let price = 120;
price =150;
console.log(price);

console.log("name22");
var name22="Rafsun";

const dress = ["dress1", "dress2"];
dress.push("dress3");
console.log(dress);

function add(num1,num2){
    const result = num1 + num2;
    console.log(result);
}

add(12,13);

function add(num1,num2){
    const result = num1 + num2;
    console.log(result);
}

add(12);

function add2 (num1,num3 = 0){
    const total = num1 +num3;
    console.log(total);
}
add2(12);


function fullName(first,lastName=" ") {
    console.log(first + " " + lastName);
}
fullName("John", "Doe");
fullName("Jane");
