
function validate(){
let y=document.getElementById("mypass").value;
if(y!="12345"){
document.getElementById("vis4").style.visibility="visible";
document.getElementById("vis4").innerHTML="invalid password"
return false;
}
else{
  return true;
}
}
function validateForm() {
    let x = document.getElementById("pass1").value;
if(x.length<=4){(document.getElementById("vis3").style.visibility="visible")
(document.getElementById("vis3").innerHTML="password must contain more than 4 character")
return false;}

     if(!x.match(/[a-z]/)){  (document.getElementById("vis3").style.visibility="visible")
     (document.getElementById("vis3").innerHTML="password must contain atleast one lower case")
    return false;
    }
   if(!x.match(/[A-Z]/)){
    (document.getElementById("vis3").style.visibility="visible")
    (document.getElementById("vis3").innerHTML="password must contain atleast one upper case")
  return false;
  }
    if(!x.match(/[0-9]/)){
    (document.getElementById("vis3").style.visibility="visible")
    (document.getElementById("vis3").innerHTML="password must contain atleast one number")
  return false;
  }
}
  function validateForm1() {
    let x1 = document.getElementById("mail1").value;
    let x2 = document.getElementById("cmail1").value;
    let y1 = document.getElementById("pass1").value;
    let y2 = document.getElementById("cpass1").value;
    if (x1!=x2  ) {
      document.getElementById("vis").style.visibility="visible"
      document.getElementById("vis").innerHTML="mismatch of email";
      return false;
    }
    if (y1!=y2  ) {
      document.getElementById("vis1").style.visibility="visible"
      document.getElementById("vis1").innerHTML="mismatch of PASSWORD";
      return false;
    }
    return true;
  }

  function ans() {
    if(validateForm()&& validateForm1){
      return true
    }
    else{return false;}
  }