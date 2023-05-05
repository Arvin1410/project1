let tab=document.createElement('table');
let tab1=document.createElement('tr');
let tab2=document.createElement('td');
let tab3=document.createElement('td');
let tab4=document.createElement('td');
let ab1=document.createElement('tr');
let ab2=document.createElement('td');
let ab3=document.createElement('td');
let ab4=document.createElement('td');
tab1.style.border="5px solid red"
tab2.style.border="3px solid green"
tab3.style.border="3px solid"
tab4.style.border="3px solid"
ab1.style.border="5px solid red"
ab2.style.border="3px solid yellow"
ab3.style.border="3px solid"
ab4.style.border="3px solid"
document.body.append(tab)
tab.append(tab1)
tab.append(ab1)
tab1.append(tab2)
tab1.append(tab3)
tab1.append(tab4)
ab1.append(ab2)
ab1.append(ab3)
ab1.append(ab4)
tab2.innerHTML="id";
tab3.innerHTML="name";
tab4.innerHTML="place"
ab2.innerHTML="SINGLE";
ab3.innerHTML="ARVIN";
ab4.innerHTML="WHERE SINGLE LEAVE"

