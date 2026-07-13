
let username1=document.getElementById("email")
let password1=document.getElementById("password") 
async function  btn(event){
let username=username1.value
let password=password1.value
event.preventDefault()
const user={
email:username,
password:password}
const methods={
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify(user)
}
console.log("Hello")
console.log(username)
console.log(password)
await fetch("http://localhost:3000/login",methods)
.then (res=>res.json())
.then(data=>{
console.log(data)

if(data.success){
if(data.role==="Admin"){
alert(" Admin Login Successfully ")
window.location.href="Admin.html"
}
else{
const email_id=data.result.Email
alert(" Student Login successfully")
console.log(email_id);
window.location.href=`Student_Dashboard.html?email=${email_id}`
}
}
else{
//console.log("failed")
alert("Incorrect Credentials")
username1.value=""
password1.value=""
//console.log(username1)
}
})

}

//Forgot Password
const forgot=document.getElementById("forgot")
const captcha=Math.floor((Math.random()*100000))
const p=document.createElement("p")
const l=document.createElement("input")
l.setAttribute("id","l_E")
const back_b=document.getElementById("back_b")
const login_b=document.getElementById("login_b")
const forgot_b=document.getElementById("forgot_b")
const login_container=document.getElementById("login-container")
function Forgot(){
const pass=document.getElementById("password")
const email=document.getElementById("email")
console.log("Forgot")
pass.style.display="none"
back_b.style.display="none"
login_b.style.display="none"
p.textContent=captcha
forgot_b.textContent="Create New Password"

const l_E=document.getElementById("l_E")
l.placeholder="Enter captch"
forgot.appendChild(p)
forgot.appendChild(l)
if(forgot_b.textContent=="Create New Password"){
if(email.value==""){
console.log(email.value)
alert("Please Enter Email")}
else if(captcha==l_E.value){
console.log("captcha matched")
login_container.innerHTML=`<h1>Update the password</h1>
<input placeholder="Passowrd" id="pass"/>
<input placeholder="confirm Password" id="confirm_pass" />
<button id="create_p" >Create Password</button>
`

const p=document.getElementById("pass")
const confirm_p=document.getElementById("confirm_pass")

create_p.addEventListener("click",(
()=>{
if(p.value==confirm_p.value){
console.log("Password Matched")
console.log(email.value)
const user={email:email.value,
password:p.value}
const met={
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(user)}
const e=email.value
fetch(`http://localhost:3000/forget/${e}`,met)
.then(res=>res.json())
.then(data=>{if(data.forget){
alert("Password Reset Succesfully")
window.location.href="Login.html"
}
else{
alert("Not a valid user")}})
}
else{
alert("Password & confirm password not the same")}
console.log(p.value)
console.log(confirm_p.value)

}))

}
else{
alert("captcha not matched")
}}
}

function back(){
window.location.href = "Home.html"
}













// // const username=document.getElementById("email");
// // const password=document.getElementById("password");
// // function login_btn(){
// // const user={
// // email:username.value,
// // password:password.value}
// // const methods={
// // method:'POST',
// // headers:{'Content-Type':'application/json'},
// // body:JSON.stringify(user)
// // }
// // fetch("http://localhost:3000/login",methods)
// // .then(res=>res.json())
// // .then(data=>data.map((list)=>{
// // if(list.Email.toLowerCase()===username.value.toLowerCase()){
// // isusername=true
// // console.log(isusername+"isusername")
// // }
// // if(list.Password.toLowerCase()===password.value.toLowerCase()){
// // ispassword=true
// // console.log(isusername+"isusername")
// // }
// // }
// // ))
// // }
// // d()
// // function d(){
// // if(isusername===true &&ispassword===true ){
// // window.location.href="Student_Dashboard.html"
// // }
// // else{
// // alert("Incorrect credentials")}}



