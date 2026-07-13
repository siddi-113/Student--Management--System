
const sql = require("mssql");
const config = {
    server: 'DESKTOP-9J6OSAF',
    database: 'master',
    user: 'Jyothirmai',
    password: 'Jyothi@123',
    options: {
        trustServerCertificate: true,
        encrypt: false
    }
};
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());
async function data() {
  await sql.connect(config);
    app.get("/registration", async (req, res) => {
    const result = await sql.query("SELECT * FROM Students_details");
    res.json(result.recordset);
    });
    //registration
app.post("/registration", async (req, res) => {
  console.log(req.body);
  const {
    firstname,
    lastname,
    Email,
    contact,
    aadhaar,
    address,
    gender,
    date,
    qualification,
    college,
    course,
      password    
        } = req.body;
  const student_rec=await sql.query(`select *from Students_details where email='${Email}'`)
  if(student_rec.recordset.length==1){
   res.json({available:true})
   console.log(res.json())
   }
   else{
    res.json({available:false})}
const result=await sql.query(`
INSERT INTO Students_details
(FirstName, LastName, Email, ContactNumber, AadhaarNumber, Address,
Gender, DOB, Qualification, CollegeName, CourseInterested, PassWord)
VALUES
('${firstname}','${lastname}','${Email}','${contact}','${aadhaar}',
'${address}','${gender}','${date}','${qualification}',
'${college}','${course}','${password}')`);
res.json({message:"success"});
});
//update in registerform
app.put("/registration/:id", async(req, res) => {
  const id = Number(req.params.id);
  const {firstname,lastname, contact, aadhaar, address,Email,
gender,date, qualification, college, course}=req.body

 await sql.query(`Update  Students_details Set FirstName ='${firstname}',
 LastName='${lastname}', ContactNumber='${contact}', AadhaarNumber='${aadhaar}', Address='${address}'
 ,Gender='${gender}', DOB='${date}',Qualification='${qualification}',CollegeName='${college}'
 ,CourseInterested='${course}'
where Email='${Email}'`)
res.send({updated:true})
})

//login
app.post("/login",async(req,res)=>{
const{email,password}=req.body
const result=await sql.query(`select Email,Password ,role from Students_details
where Email='${email}' and Password='${password}'`)
console.log(result.recordset.length)
if(result.recordset.length==1){
res.json({
success:true,
role:result.recordset[0].role,
result:result.recordset[0]})}
else{
res.json({
success:false})
}
}
)
// console.log(result.recordset.length)
// if(result.recordset.length>0){
// res.json({
// success:true,
// role:result.recordset[0].role})}
// else{
// res.json({
// success:false})
// }
// console.log(result.recordset)
// })
//forgot password
app.put("/forget/:e", async(req, res) => {
const {email,password}=req.body
 const valid_email=await sql.query(`select *from Students_details where Email='${email}'`)
  const sql_result=await sql.query(`update Students_details
  set Password='${password}' where Email='${email}'`)
  console.log(valid_email.recordset.length)
if(valid_email.recordset.length==1){
res.send({forget:true})}
else{
res.send({forget:false})
}

})

//admin
app.get('/Admin',async(req,res)=>{
const result_1=await sql.query("select *from Students_details where role='Student'")
const count=await sql.query("select count(*) as count from students_details where role='Student'")
const admin_data=await sql.query("select *from Students_details where role='Admin'")
res.send({data:result_1.recordset,
count:count.recordset,
admin_data:admin_data.recordset
})
console.log(result_1.recordset)
})
//delete admin
app.delete("/Admin/:id",async(req,res)=>{
const id=req.params.id
console.log(id)
console.log("Hello delete")
const r=await sql.query(`select* from Students_details where StudentID='${id}'`)
await sql.query(`delete from Students_details where StudentID='${id}'`)
res.json({
  deleted: true,
  message: "Deleted Successfully",
  details:r.recordset[0]
});
})

app.post('/Admin',async(req,res)=>{
const {Email,Password,role}=req.body
const result=await sql.query(`insert into Students_details(Email,Password,role)
values('${Email}','${Password}','${role}')`)
res.json(result.recordset)
console.log(result.recordset)
})
app.post('/Admin/Details',async(req,res)=>{
const id=req.body.id
const result=await sql.query(`select *from  Students_details where StudentID='${id}'`)
res.json(result.recordset)
console.log("admin/details")
})
//add_admin
app.post('/addAdmin', async(req,res)=>{
const {email,Password,role}=req.body 
const addadmin= await sql.query(`insert into Students_details(Email,Password,role)
values('${email}','${Password}','${role}')`)
res.json(...{edit:true},addadmin.recordset)
})

//upload files

const multer=require("multer")
const storage = multer.diskStorage({
  destination:function(req,file,cb){
        cb(null,"uploads");
  },
  filename:function(req,file,cb){
     cb(null,file.originalname);
  }
});
const upload = multer({storage});
async function startserver(){
  try{
  await sql.connect(config)
  app.post("/upload",
upload.single("file"),
async(req,res)=>{
const f=req.file.originalname
const s_id=req.body.email
const desc=req.body.desc 
console.log(req.body);
console.log(req.file);
const s=await sql.query(`insert into  student_files(file_name,StudentId,description)
  values('${f}','${s_id}','${desc}')`)
   res.send({status:"Uploaded"});
});
app.post("/files_h",async(req,res)=>{
  const email=req.body.email
  console.log(email)
  console.log("StudentId:", req.body.email);
  const files_h=await sql.query(`select * from  student_files
where StudentId='${email}'`)
res.json(files_h.recordset)
})
}
catch(err){
console.log(err)}
 app.listen(3000,()=>{
 console.log("Connected")})

}
startserver()

}
data();
app.listen(3000, () => {
console.log("Hello i am 3000 port and connected");
  });
  
module.exports={sql,config}
