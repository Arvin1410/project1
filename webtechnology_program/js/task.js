//on click event


// let btn=document.querySelector('button')
// btn.addEventListener("click",()=>{
//     let un=document.getElementById('user').value;
//     let pass=document.getElementById('password').value;

//     let div=document.querySelector('div')
//     div.innerText=(`${un} is  ${pass}`);
//     div.style.border="5px solid blue"
//     div.style.width="100px"
//     div.style.height="100px"
//})

// let form=document.querySelector('form');
// form.addEventListener('user').value;


//key
// three key function 1.key up 2.key down 3.key press
// let input=document.querySelector('input');
// input.addEventListener("keydown",()=>{
//     let div=document.querySelector('div')
    
//     let rc=Math.ceil(Math.random()*10000).toString(16);
//     console.log(rc);
//     div.style.backgroundColor=
// })

let tab=document.createElement('table');
let tab1=document.createElement('tr');
let tab2=document.createElement('td');
// let tab3=document.createElement('td');
tab1.style.border="5px solid red"
tab2.style.border="3px solid green"


document.body.append(tab)
tab.append(tab1)
tab1.append(tab2)

let key=document.querySelector('input');
let count=0;
 key.addEventListener("keyup",()=>{

count++;
// tab2.innerHTML="count is  "+count;

    let div=document.querySelector('div');
    div.innerHTML="count is "+count;
    // div.style.backgroundColor="red";
    // div.style.width="100px";
    // div.style.height="50px";
    // document.write(`${keyup}`)
 })