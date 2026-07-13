const firstname=document.getElementById("firstname")
const lastname=document.getElementById("lastname")
const email=document.getElementById("email")
const contact=document.getElementById("contact")
const aadhaar=document.getElementById("aadhaar")
const address=document.getElementById("address")
const gender=document.getElementById("gender")
const date=document.getElementById("date")
const qualification=document.getElementById("qualification")
const college=document.getElementById("college")
const course=document.getElementById("course")
const password=document.getElementById("password")
const confirmpassword=document.getElementById("confirmpassword")
const params=new URLSearchParams(window.location.search)
const email_para=params.get("email")
const id=params.get("id")
console.log(id)
const Register=document.getElementById("Register")
const edit=params.get("edit")
console.log(email_para)
console.log(email.innerHTML=email_para)
const Register_b=document.getElementById("Register")
function adminupdate(){
 const methods={
  method:"PUT"  ,
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({firstname:firstname.value,
lastname:lastname.value,
Email:email.value,
contact:contact.value,
aadhaar:aadhaar.value,
address:address.value,
gender:gender.value,
date:date.value,
qualification:qualification.value,
college:college.value,
course:course.value
})
 }  
fetch(`http://localhost:3000/registration/${id}`,methods) 
.then(res=>res.json())
.then(data=>{
console.log(data.updated)
if(data.updated){
alert("Admin details updated successfully")}
})
}
function data(){
if(edit){
Back.addEventListener("click",function(){
window.location.href="Admin.html"}
)
Register_b.addEventListener("click",()=>{
console.log("Hello update button")
adminupdate()})
Register.textContent="Update"
email.value=email_para
email.readOnly=true
password.disabled=true
confirmpassword.disabled=true
}
else{
Register_b.addEventListener("click",()=>{
console.log("Hello Register button")

})}}


data()
async function  registration_on(){
    if (email.value === "") {
        alert("Email is required");
        return;
    }
const methods={
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({firstname:firstname.value,
lastname:lastname.value,
Email:email.value,
contact:contact.value,
aadhaar:aadhaar.value,
address:address.value,
gender:gender.value,
date:date.value,
qualification:qualification.value,
college:college.value,
password:password.value,
course:course.value
})}
await fetch("http://localhost:3000/registration",methods)
.then(res=>res.json())
.then(data=>{
console.log(data)
if(data.available){
if(edit){
alert ("Admin Registration Updated")
window.location.href = "Login.html"
}
else{
window.alert("Already available")
window.location.href = "Login.html"}
}
else{
alert ("User Registration Completed")
window.location.href = "Home.html"
}

})

}
function back(){
    window.location.href="Home.html"
}