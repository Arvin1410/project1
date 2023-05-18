var a1=() =>  {return "hii broo"}
console.log(a1());


//higher order function with arrow function
let a2=(a,b,test) => {
    let y=test(a,b)
    console.log(y);
}
a2(10,20,add)
a2 (10,20,sub)
function sub(a,b) {
    return a-b;
}
function add(a,b) {
    return a+b;
}

function sum1(...args) {
    console.log(args);
}
sum1(3,34,56)