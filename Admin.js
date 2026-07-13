let student=document.getElementById("student-table");
let count=document.getElementById("count")
let student_table=document.getElementById("student_table")
function view_details(id){
console.log("Hello View Button "+id)
window.location.href=`student_profile.html?id=${id}`
}
function editAdmin(email,edit,id){
console.log("Hello Edit")
window.location.href=`Registration.html?email=${email}&edit=${edit}&${id}`
}
//delete admin
const del={
    method:"DELETE",
}
function removeadmin(id){
console.log("Remove"+id)
fetch(`http://localhost:3000/Admin/${id}`,del)
.then(res=>res.json())
.then(data=>{console.log(data)
    if(data.details){
        alert(`'${data.details.Email}Admin deleted successfully`)}})
}
function student_details(){
fetch("http://localhost:3000/Admin")
.then(res=> res.json())
.then(data=>{
count.textContent=data.count[0].count
data.data.map(list=>{
let tr_item=document.createElement("tr")
let td_item_1=document.createElement("td")
let td_item_2=document.createElement("td")
let td_item_3=document.createElement("td")
let td_item_4=document.createElement("td")
let button=document.createElement("button")
button.textContent="View Details"
button.addEventListener('click',()=>view_details(list.StudentID))
td_item_1.textContent=(list.FirstName+list.LastName)
td_item_2.textContent=(list.Email)
td_item_3.textContent=(list.ContactNumber)
td_item_4.appendChild(button)
tr_item.appendChild(td_item_1)
tr_item.appendChild(td_item_2)
tr_item.appendChild(td_item_3)
tr_item.appendChild(td_item_4)
student_table.appendChild(tr_item)})
const Admin_details=document.getElementById("Admin_details")
console.log(data.admin_data)
data.admin_data.map((elements)=>{
const li_e=document.createElement("li")
const li_contact=document.createElement("li")
const li_div=document.createElement("div")
const li_button=document.createElement("Button")
li_button.textContent="Edit"
li_button.addEventListener('click',()=>{
console.log("Hello console")
editAdmin(elements.Email,edit=true,elements.StudentID)
})
const remove_button=document.createElement("Button")
remove_button.textContent="Remove"
remove_button.addEventListener('click',()=>{
console.log("Hello console")
removeadmin(elements.StudentID)
})

li_contact.textContent=elements.ContactNumber
li_div.appendChild(li_e)
li_div.appendChild(remove_button)
li_div.appendChild(li_contact)
li_div.appendChild(li_button)
li_e.textContent=elements.Email
Admin_details.appendChild(li_div)
li_div.classList.add("admin_details")
}
)
})
}
student_details()
const admin_page=document.getElementById("admin_page")
let add= true
function admin(){
if(add===true){
console.log("admin()")
admin_page.innerHTML=
`<h1>Add New Admin </h1>
<input type="email" placeholder="Email" id="Email_admin"/></br>
<input type="password" placeholder="Password" id="Password"/></br>
<button id="submit">Submit</button>
`
const submit=document.getElementById("submit")
submit.addEventListener("click",function(){
student_table.innerHTML="";
const Email_admin=document.getElementById("Email_admin")
const Password=document.getElementById("Password")
console.log(Email_admin.value)
console.log(Password.value)
if(Email_admin.value!=="" &Password.value!==""){
   const admin={email:Email_admin.value,
Password:Password.value,
role:"Admin"
}
methods={
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(admin)}
fetch("http://localhost:3000/addAdmin",methods)
alert(Email_admin.value+"added succeefully")
admin_page.innerHTML="";

    student_details(); }
    else{
    alert("Please enter Email &Password")}
})
}

} 
// const admin={email:Email_admin.value,
// Password:Password.value,
// role:"Admin"
// }
// methods={
// method:"POST",
// headers:{"Content-Type":"application/json"},
// body:JSON.stringify(admin)}
// fetch("http://localhost:3000/addAdmin",methods)
// alert(Email_admin.value + "added succeefully")
// admin_page.innerHTML=""
// })

// }
// }