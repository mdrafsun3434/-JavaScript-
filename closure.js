function counter(){
    let count = 0;
    function increment(){
        count=count+1;
        console.log(count)
    }
    return increment;
}
// const count1 =counter();
// count1();
// count1();
// count1();
// count1();
// count1();


function multiply(a,b){
    result =a+b;

    return result;
}
console.log(multiply(10,20));