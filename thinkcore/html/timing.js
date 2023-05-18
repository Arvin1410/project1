
// function sub() {
//    console.log("hello"); 
// }
// let clear1=setTimeout(sub, 3000);

// let clear=()=>{clearTimeout(clear1);
//     console.log("clear event");}
// let btn=document.getElementById('btn').addEventListener('click', clear);

function sub() {
   console.log("hello"); 
}
let clear1=setInterval(sub, 1000);

let clear=()=>{clearInterval(clear1);
    console.log("clear event");}
let btn=document.getElementById('btn').addEventListener('click', clear);






