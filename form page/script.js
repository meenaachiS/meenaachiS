
/*form page section*/
document.getElementById("formSection").addEventListener("submit",function(e){

e.preventDefault();

let fname=document.getElementById("firstname");
let lname=document.getElementById("lastname");
let mobile=document.getElementById("mobile");
let email=document.getElementById("email");
let nation=document.getElementById("nationality");

let namePattern=/^[A-Za-z]+$/;
let mobilePattern=/^[0-9]{10}$/;
let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let valid=true;

/* First Name */

if(fname.value.trim()===""){

document.getElementById("fnameError").innerText="Please enter your first name";
document.getElementById("fnamePopup").style.display="block";
fname.classList.add("input-error");
valid=false;

}
else if(!namePattern.test(fname.value)){
document.getElementById("fnameError").innerText="Only letters allowed";
fname.classList.add("input-error");
valid=false;

}else{

document.getElementById("fnameError").innerText="";
document.getElementById("fnamePopup").style.display="none";
fname.classList.remove("input-error");

}

/* Last Name */

if(lname.value.trim()===""){

document.getElementById("lnameError").innerText="Please Enter your last name";
document.getElementById("lnamePopup").style.display="block";
lname.classList.add("input-error");
valid=false;

}else if(!namePattern.test(lname.value)){

document.getElementById("lnameError").innerText="Only letters allowed";
fname.classList.add("input-error");
valid=false;

}else{

document.getElementById("lnameError").innerText="";
document.getElementById("lnamePopup").style.display="none";
fname.classList.remove("input-error");

}

/* Mobile */

if(!mobilePattern.test(mobile.value)){

document.getElementById("mobileError").innerText="Please Enter the valid mobile number";
document.getElementById("mobilePopup").style.display="block";
mobile.classList.add("input-error");
valid=false;

}else{

document.getElementById("mobileError").innerText="";
document.getElementById("mobilePopup").style.display="none";
mobile.classList.remove("input-error");

}

/* Email */

if(!emailPattern.test(email.value)){

document.getElementById("emailError").innerText=" Please Enter the valid email";
document.getElementById("emailPopup").style.display="block";
email.classList.add("input-error");
valid=false;

}else{

document.getElementById("emailError").innerText="";
document.getElementById("emailPopup").style.display="none";
email.classList.remove("input-error");

}

/* Nationality */

if(nation.value===""){

document.getElementById("nationError").innerText="Please select the nationality";
document.getElementById("nationPopup").style.display="block";
nation.classList.add("input-error");
valid=false;

}else{

document.getElementById("nationError").innerText="";
document.getElementById("nationPopup").style.display="none";
nation.classList.remove("input-error");

}
let gender = document.querySelector('input[name="gender"]:checked');
/*gender*/
if(!gender){

document.getElementById("genderError").innerText="Please select the gender";

valid = false;

}else{

document.getElementById("genderError").innerText="";

}
/* Redirect */

if(valid){

window.open("thankyou.html", "_blank");

}
if(valid){
    document.getElementById("formSection").submit();
}
});