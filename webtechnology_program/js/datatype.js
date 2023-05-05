//number
let num=100;
console.log(num,typeof num);

let num1=10.55;
console.log(num1,typeof num1);

let num2=1/2;
console.log(num2,typeof num2);

//string
console.log(`string data type`);

let str="hii daa";
console.log(str,typeof str);

let str1='single';
console.log(str1,typeof str1);

let str2=`forever`;
console.log(str2,typeof str2);

console.log(`${str} i am ${str1} ${str2}`); //(`) using back tick and ${}interpolation we can print statement with variable

console.log(`null data type`);
//null data type
let n=null;
console.log(n,typeof null);
//bigint
let c1=100n;
console.log(c1,typeof c1);
let c2=BigInt("20");
console.log(c2,typeof c2);
let c3=BigInt(true);
console.log(c3,typeof c3);
let c4=BigInt(false);
console.log(c4,typeof c4);
let c5=BigInt("  ");
console.log(c5,typeof c5);
let c6=BigInt(1);
console.log(c6,typeof c6);
//undefined
console.log("undefined datatype");
var c7;
console.log(c7);
let c8;
console.log(c8);

//boolean datatype
console.log("boolean datatype");
console.log(!true);
console.log(!false);
let c9=Boolean(1);
console.log(c9,typeof c9);
let c10=Boolean(0);
console.log(c10,typeof c10);
let c11=Boolean("arvin");
console.log(c11,typeof c11);
let c12=Boolean(23n);
console.log(c12,typeof c12);
