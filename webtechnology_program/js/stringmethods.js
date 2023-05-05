let a="Once a Single Always a single";
console.log(a.length);
console.log(a.toLowerCase());
console.log(a.toUpperCase());
console.log(a.indexOf('a'));
console.log(a.indexOf('z'));//no charater is present it will print -1
console.log(a.charAt(10));
console.log(a.charAt(100));//index is out of range it will print space
console.log(a.slice(2,8));
console.log(a.split());
console.log(a.split(""));
console.log(a.split("").reverse().join());
console.log(a.endsWith('e'));
console.log(a.endsWith('l'));
console.log(a.startsWith('O'));
console.log(a.substring(2));

let d1="technology";
let d2="web";
console.log(d1.concat(d2));
console.log(`${d1} ${d2}`);
console.log(d1+d2);
console.log(d1.lastIndexOf('y'));
console.log(d1.repeat(5));
console.log(d1.replace("lo","pi"));
console.log(d1.includes("te"));
console.log(d1.replaceAll("o","*"));