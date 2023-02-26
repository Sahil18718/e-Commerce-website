let names = document.getElementById("name");
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let submit = document.getElementById("sub");
arr = JSON.parse(localStorage.getItem("login"));
if(arr == null){
    arr = []
}

submit.addEventListener("click",function(){
    let obj = {
        nameob: names.value,
        mailob: mail.value,
        passob: pass.value,
    }
    arr.push(obj);
    localStorage.setItem("login",JSON.stringify(arr));
    window.location = "../signin/signin.html"
})