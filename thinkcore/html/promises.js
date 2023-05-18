// let greet=name=>console.log(`hello${name}`);
// let info=(fn,ln,callback)=>{
//     const fun=`${fn}${ln}`
//     console.log(fun);
//     callback(fun);
// }
// info('jojn','doe',greet);
let flag=true;
 let pro1=Promise.resolve('hello');
let pro2=new Promise((res,rej)=>{
    if(flag){
        setTimeout(() => {
            res('hiii');
        }, 2000);
    }
    else{
        rej("failed")
    }
   
});
// pro1.then(res1=>console.log(res1))
// pro2

// // .then(res=>console.log(res))
// .then(function sub() {
//     console.log(2+3);
// })

// .catch(rej=>console.log(rej))
Promise.all([pro1,pro2]).then(res=>console.log(res))