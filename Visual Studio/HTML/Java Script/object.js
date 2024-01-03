let obj={
    id:101,
    name:"sindhu"
}
console.log(obj,typeof obj);            //{id:101,name:sindhu}object
console.log(obj.name);                 //sindhu

obj["address"]="cta";
obj.address="goa";

console.log(obj.address);            //goa




//creating object inside another object

let ob={
    colour:"black",
    vehicle:"bike",
    bike:{
        ride:"daily",
        on:"road"
    }
}
console.log(ob.bike);                   //{ride:daily,on:road}
console.log(ob.bike.on);               //road
console.log(ob);                      //{color:black,vehicle:bike,bike:{...}}
console.log(ob,typeof ob);           //{color:black,vehicle:bike,bike:{...}}object









//creating fun inside the object
let o1={
    sports:"cricket",
    stadium:"chinaswamy",
    players:()=>
    {
        let a1="virat";
        let jno=18;
        return `${a1} ${jno}`
       //return this.a1

    }
}
//console.log(o1.players);
console.log(o1.jno);




