let result=function (score) {
    return new Promise(function (resolve,reject) {
        if(score>50){
            resolve("passed")
        }
        else{
            reject("failed")
        }
    })    
}
let grade=function (response) {
    return new Promise(function (resolve,reject) {
     resolve("your grade is  "+response)
    })
    
}
async function mycalc(){
    console.log( await result(prompt("enter the marks")));
    console.log(await grade(prompt("enter the grade")));  
}
mycalc();