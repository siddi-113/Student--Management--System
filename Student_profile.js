
const student_details=document.getElementById("student_details")
const param=new URLSearchParams(window.location.search)
const id=param.get("id")
const user={id:id}
const options={
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(user)}
fetch("http://localhost:3000/Admin/Details",options)
.then(res=>res.json())
.then(data=>{
console.log(data)
console.log(data[0])
const r=data[0]
for (let x in data[0]){
const list=document.createElement("li")
let value=(data[0][x])
list.textContent=x+": "+value
student_details.appendChild(list)
}
})


function submit(){
const Email_admin=document.getElementById("Email_admin")
const Password=document.getElementById("Password")
console.log("submit()")
console.log(Email_admin.value)
console.log(Password.value)
const user={Email:Email_admin.value,
Password:Password.value,
role:"Admin"
}
const methods={
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(user)
}
fetch("http://localhost:3000/Admin",methods)
.then(res=>res.json())
.then(data=>console.log(data))
alert("Admin added succefully")
}

function back(){
    window.location.href="Admin.html"
}