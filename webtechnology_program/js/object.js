//31/03/2023
//if we this keyword in normal function it will point to currrent object
course="java";
let y10={
course:"web tech",place:"bangaolre",
colors:function(){
    let course="sql"
    return this.course;
}

}
console.log(y10.colors());
//when we use this keyword in arrow function it will point global object
course="java1";
let y11={
course:"web tech1",place:"bangaolre1",
colors:()=>{
    let course="sql"
    return this.course;
}

}
console.log(y11.colors());
//object creation
let emp=[
    {
        id:101,
        ename:"karnan"
    },{
        id:102,
        ename:"dhanush"
    }
]
console.log(emp,typeof emp);
console.log(emp[0]);
console.log(emp[1]);
//object creation with new keyword
let yy=new Object();
console.log(yy,typeof yy);
yy["id"]=1;
yy["name"]="arvin";
yy["id"]=2;
yy["name"]="single";
console.log(yy);
//why object are mutable
let mute={
pcolor:"white",pheight:"30inch"

}
console.log(mute);
mute.pcolor="red";
//it will take the updated memory
console.log(mute);
// can be key be in numbers
let k={
    1:"single",
    2:"innocent"
}
console.log(k[1]);
console.log(k[2]);
//object methods
//1.Freeze method
let free={
    name:"vinod",
    place:"agrahara"
}
free["name"]="sunil"
console.log(free);
Object.freeze(free);
free["name"]="arvin"
console.log(free);
//method 2 assign
//assign-it will collect properties of all object and point to current object
let ab={
    company:"ty",

}
console.log(ab);

let bb={
    name:"hii",

}
console.log(bb);
let cc=Object.assign(bb,ab);//using assign method
console.log(cc);

//keys method-to fetch the keys of the object
//values method-to fetch the values of the object
let key=Object.keys(mute);//keys method
console.log(key);
 key=Object.values(mute);//values method
 console.log(key);



//Entries method-to convert from object to arrays
let enter={
    sname:"abc",
    sid:200
}
console.log("before enteries");
console.log(enter);

console.log(Object.entries(enter));
console.log("after enteries");
console.log(enter);
//math object
let oo=123.34;
oo=Math.ceil(oo);
console.log(oo);
let ff=123.34
ff=Math.floor(ff);
console.log(ff);

//OTP using math function
let random=Math.random()*100;
random=Math.ceil(Math.random()*10000);
console.log(random);
//all math function
console.log(Math.min(12,34,5,678,88,9));
console.log(Math.max(12,34,5,678,88,9));
console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
console.log(Math.cbrt(8));
console.log(Math.exp(2));


//date
let date=new Date();
console.log(new Date());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());


