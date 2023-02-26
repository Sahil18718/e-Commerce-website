arr = JSON.parse(localStorage.getItem("login"));
let admininfo = JSON.parse(localStorage.getItem("info"))||[];
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let login = document.getElementById("sub");
let direct = document.createElement("a");

login.addEventListener("click",function(){
    
    flg = true
    arr.forEach(element => {
        if(mail.value==element.mailob && pass.value == element.passob){
            flg = false;
             alert("sucessful");
             let info = {mail:element.mailob,pass:element.passob,nameob:element.nameob}
             admininfo.push(info);
             localStorage.setItem("info",JSON.stringify(admininfo));
             window.location = "../admin.html"
        }
       
         
    });
    if(flg)
     alert("Intruder");
})