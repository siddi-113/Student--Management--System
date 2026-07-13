const fileInput=document.getElementById("fileInput")
const uploaded_files=document.getElementById("uploaded_files")
const params=new URLSearchParams(window.location.search)
const email_id=params.get("email")
const desc_e=document.getElementById("description")
let upload=false
function uploadFile(){
    const formdata=new FormData();
    const desc=desc_e.value 
    console.log("uploadFile")
    console.log(email_id)
    const file_data=fileInput.files[0]
    formdata.append("file",file_data);
    formdata.append("email",email_id);
    formdata.append("desc",desc);
     fetch("http://localhost:3000/upload",{ 
         
        method:"POST",
        body:formdata
    })
    .then(res=>res.text())
    .then(data=>{alert("File uploaded successfully")
         fileInput.value="";
         desc_e.value=""
    });
}
//upload files button
uploaded_files.addEventListener("click",(()=>{
const file_table = document.getElementById("file_table");
file_table.innerHTML = "";
alert("Files are loading")
fetch("http://localhost:3000/files_h",{
method:"POST", 
headers:{"Content-Type":"application/json"},
body:JSON.stringify({email:`${email_id}`})})
.then(res=>res.json())
.then(data=>{
console.log(data)
data.map((list)=>{
const file_table=document.getElementById("file_table")
let tr_item=document.createElement("tr")
let td_item_1=document.createElement("td")
let td_item_2=document.createElement("td")
const a=document.createElement("a")
a.textContent=list.file_name
console.log(`./uploads/${list.file_name}`)
a.setAttribute("href",`./uploads/${list.file_name}`)
a.setAttribute("target","_blank")
td_item_1.appendChild(a)
td_item_2.textContent=list.description
tr_item.appendChild(td_item_1)
tr_item.appendChild(td_item_2)
file_table.appendChild(tr_item)
})
})
}))

function back(){
    window.location.href="Home.html"
}