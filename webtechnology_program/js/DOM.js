console.log(document);

console.log(document.URL);

console.log(document.head);

 console.log(document.title);

 console.log(document.body);

console.log(document.all);

//get element by id
let id=document.getElementById('demo');
console.log(id);
id.innerHTML="hii"
id.style.background="green"
id.style.color="red"
id.style.fontSize="100px"

//get element by class 
let test=document.getElementsByClassName('name123')
console.log(test);
test[0].style.background="red"



//get element by tag name
let tag=document.getElementsByTagName('pre');//from of html collection
console.log(tag);
tag[1].style.background="blue";
console.log(Array.isArray(tag));
let rr=Array.from(tag);
console.log(rr,typeof rr);
console.log(Array.isArray(rr));

//query selectors
let query=document.querySelector(".demo1");
console.log(query);
query.style.fontSize="50px"
query.style.background="red";


//query selectors all
let query1=document.querySelectorAll(".demo2");
console.log(query1);//returns in terms of node list
console.log(Array.isArray(query1));
query1[2].style.background="green"

//insert content into elements using JS
//how to create element without html
let create=document.createElement('h1');
console.log(create);

let text=document.createTextNode('hello my dear');
console.log(text);
//insert the content inside the tag
create.appendChild(text)

//gives the output in the document interface
document.body.append(create)
create.style.color="yellow"



document.getElementById("red").innerHTML;
// document.write(no);


