let url = 'https://63c66f314ebaa8028545abad.mockapi.io/shop'

 obj = JSON.parse(localStorage.getItem("ups"))||[];
show = document.getElementById("disp");

let itemNameInput = document.getElementById("Item-name");
let itemImgInput = document.getElementById("Item-image");
let itemCategoryInput = document.getElementById("Item-category");
let itemPriceInput = document.getElementById("Item-price");
let itemCreateBtn = document.getElementById("add-Item");



let updateItemIdInput = document.getElementById("update-Item-id");
let updateItemNameInput = document.getElementById("update-Item-name");
let updateItemImageInput = document.getElementById("update-Item-image");
let updateItemCategoryInput = document.getElementById("update-Item-category");
let updateItemPriceInput = document.getElementById("update-Item-price");
let updateItemUpdateBtn = document.getElementById("update-Item");



itemCreateBtn.addEventListener("click", () => {
  let userobj = {
    name:itemNameInput.value,
    image: itemImgInput.value,
    category: itemCategoryInput.value,
    price: itemPriceInput.value,
   
  };
  
    fetch(url,{
      method:'POST',
      body:JSON.stringify(userobj),
      headers:{
        'Content-type':'application/json'
      }
    })
    .then(res=>res.json())
    .then((data)=>{
        console.log(data);
        
    });
    
});


updateItemUpdateBtn.addEventListener("click", function () {
  let upitem ={
  id:updateItemIdInput.value,
  name: updateItemNameInput.value,  
  image:updateItemImageInput.value,
  category:updateItemCategoryInput.value,
  price:updateItemPriceInput.value
}
fetch(`${url}/${upitem.id}`,{
  method:'PUT',
  body:JSON.stringify(upitem),
  headers:{
    'content-type':'application/json'
  }
})
.then(res=>res.json())
 .then((data)=>{console.log(data)
 show.innerHTML= getCard(data.id,data.name,data.catagory,data.img,data.price)});
});




function getCard(id, name, catagory,imageUrl,price) {
  let card = `
      <div class="card" data-id=${id} >
        <div class="card__img">
        <img src=${imageUrl} alt="err" />
        </div>
        <div class="card__body">
          <h3 class="card__item card__title">${name}</h3>
          <div class="card__item card__description">
            ${catagory}
          </div>
        <p>${price}</p>
        </div>
      </div>
  `;
  return card;
  
}

console.log(obj);
populateEditForms(obj)
function populateEditForms(obj){
  
fetch(`${url}/${obj}`)
.then((res)=>res.json())
.then((data)=>{
  console.log(data);
    updateItemIdInput.value = data.id;
    updateItemNameInput.value = data.name;
    updateItemImageInput.value = data.img;
    updateItemCategoryInput.value = data.catagory;
    updateItemPriceInput.value = data.price;
    show.innerHTML= getCard(data.id,data.name,data.catagory,data.img,data.price)
  })
  
}