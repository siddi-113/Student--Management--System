console.log("Hello COnsole")
function submit_data(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let email=document.getElementById("email").value;
    let phonenumber=document.getElementById("phone").value;
    let city=document.getElementById("city").value;
    console.log(username)
    console.log(password)
    console.log(email)
    console.log(phonenumber)
    console.log(city)
    let success_msg=document.getElementById("success_msg");
    let header_con=document.getElementById("header_con");
    if(username==="Jyothi"||password==="456"|| email==="jyo@gmail.com"|| phonenumber==="9888"|| city==="ptp"){
      success_msg.innerHTML="Thank you for registering";
      header_con.style.backgroundColor="yellow";
    success_msg.style.color="orange";
    success_msg.style.backgroundColor="lightgray";
    document.getElementById("book").innerHTML=phonenumber;
    document.getElementById("_message").innerHTML=username;
    document.getElementById("note").innerHTML=email;
    document.getElementById("names").innerHTML=city;

    }

}


 
