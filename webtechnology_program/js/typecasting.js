//typecasting
//implicity
let a=10;
console.log(a,typeof(a));

let b="hi broo";
console.log(b,typeof(b));

let c='a';
console.log(c,typeof(c));
//explicity

let d=String(200);
console.log(d,typeof(d));

let e=Number("hii");
console.log(e,typeof(e));// u will get NAN(not a number) 
//NOTE:typecasting from string to number not possible

let f=Boolean("basya");
console.log(f,typeof(f));

let g=Boolean("-basya");
console.log(g,typeof(g));

let h=Boolean(0);
console.log(h,typeof(h)); // for boolean other than zero all values get true only 'zero' return false

console.log("10"+10+10);
console.log("10"+10-10);
console.log("5"*4+3);
console.log("10"+10 %10*5-3+2);

//representing string

let str1="hello";
let str2='good morning';
let str3=`hii`;


console.log(20+"20"+40-40);

