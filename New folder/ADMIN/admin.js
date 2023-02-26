tbod = document.querySelector("#table tbody");
let url = 'https://63c66f314ebaa8028545abad.mockapi.io/shop'
fetch(url);
let files = []
let nav = document.getElementById("dispname")


admininfo = JSON.parse(localStorage.getItem("info"))||[];
let obj = JSON.parse(localStorage.getItem("ups"))||0;



async function fetching(){
    try{
        let request = await fetch(url);
        let data = await request.json();
        files = data.map(function(el){
            return{
                id:el.id,
                name:el.name,
                category:el.catagory,
                price:el.price,
                img:el.img
            }
        })
        console.log(files);
        disp(files);
    }
    catch(error){
        console.log("error");
    }
}
fetching();
function disp(data){
    data.forEach(element => {
        row  = document.createElement("tr");
        let name = document.createElement("td");
        name.innerText = element.name;
        let id = document.createElement("td");
        id.innerText = element.id;
        let category = document.createElement("td");
        category.innerText = element.category;
        let price = document.createElement("td");
        price.innerText = element.price;
       
        let del = document.createElement("button");
        del.innerText = "Delete";
        del.addEventListener("click",function(){
            fetch(`${url}/${element.id}`,{
                method:'DELETE',
                headers:{'content-type':'application/json'}
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            
        })
        let change = document.createElement("button");
        change.innerText = "Update";
       
        change.addEventListener("click",function(){
            
            obj=element.id;
            localStorage.setItem("ups",JSON.stringify(obj));
             window.location = "update.html"
           
        })
       
        row.append(id,name,category,price,del,change);
        
        tbod.append(row);
    });
}
console.log(admininfo[0]);

if(admininfo.length!==0){
let inner = `<div>
<h2>${admininfo[0].nameob}</a></h2>
<button id="logout"><h2>Logout </h2></button>
</div>`

nav.innerHTML = inner;
}
let logout = document.getElementById("logout");
logout.addEventListener("click",function(){
    admininfo = admininfo.filter((el,ind)=>{
        if(admininfo.length!==0){
            return false;
        }
    })
    localStorage.setItem("info",JSON.stringify(admininfo));
     window.location="signin/signin.html"
})