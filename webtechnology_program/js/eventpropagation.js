let gp=document.querySelector('.gp');
let p=document.querySelector('.p');
let c=document.querySelector('.c');

gp.addEventListener("click",e=>{

    console.log("grand parent capture");
})
p.addEventListener("click",e=>{

    console.log("parent capture");
    e.stopPropagation();
})
c.addEventListener("click",e=>{

    console.log("child capture");
})
document.addEventListener("click",e=>{

    console.log("document capture");
},capture="true")
