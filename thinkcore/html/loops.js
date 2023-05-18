var i=1;
while (i<=10) {
    if(i%2==0){
        console.log(i+" even no");
    }
    i++;
}
var myarray=[]
for (let index = 1; index <=10; index++) {
    myarray.push(index+10);
    
}
console.log(myarray);

function checkequals(a,b){ 
    return a==b? (a*b)
}
console.log(checkequals(2,4));
