let button=document.querySelector("button")
console.log(button);
button.onclick=()=>{
    let sts=confirm("u attend web class");
    console.log(sts);
    if(sts==true)
    {alert("you are grown up");
        document.body.style.background="grey"

   
}
    else{alert("you are not  grown up");
        document.body.style.background="pink"}
    // alert("you are grown up");
  
}

let button1=document.querySelector("#wow")
console.log(button1);
button1.onclick=()=>{
    document.body.style.background="green"
}


let button2=document.querySelector("#wow1")

button2.onclick=()=>{
    
    let val=document.querySelector('h1');
    val.innerHTML="MS is NAAYEEE";
    val.style.color="red"
    val.style.transition="5s"
    
    
    val.style.fontSize="10px"
    val.style.border="5px groove green";

    
}