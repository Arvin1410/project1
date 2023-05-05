let a=100;
var b=110;
console.log(a);
console.log(b);
function aa() {
    console.log(a);
    const a1=23;
    console.log(a);

    function bb(){
        let a2=24;
        console.log(a1);
function cc() {
    
    let a3=25;
    console.log(a2);
    console.log(a3);
}
return cc;


    }
    return bb;
    
}
aa()()();