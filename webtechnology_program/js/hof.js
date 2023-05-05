//higher order function
function hof(a,b,test) {
    let y=test(a,b)
    console.log(y);
}
hof(10,20,add)
hof(10,20,sub)
function sub(a,b) {
    return a-b;
}
function add(a,b) {
    return a+b;
}