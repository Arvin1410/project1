let lstorage=localStorage.setItem("id",100);
let lstorage1=localStorage.setItem("name","Arvin");
console.log(lstorage,lstorage1);

let lstorage2=localStorage.getItem("name");
console.log(lstorage2);

let lstorage3=localStorage.removeItem("name");
console.log(lstorage3);


let session=sessionStorage.setItem("bike","honda");
console.log(session);

 console.log(sessionStorage.getItem("bike"));



 //promises
 let pro=new Promise((resolve, reject) => {
    let a=1;
    if(a==2){
        resolve("promise is fullfilled")
    }
    else{
        reject("promises is reje")
    }
 })

 pro.then((success)=>{
    console.log(success);
 }).catch((error)=>{
    console.log(error);
 })