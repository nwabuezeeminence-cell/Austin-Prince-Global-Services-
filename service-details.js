// ======================================
// AUSTIN GLOBAL SERVICES
// SERVICE DETAILS SYSTEM
// ======================================


document.addEventListener("DOMContentLoaded",()=>{


const services = [


{
id:1,
name:"Printing & Photocopying",
price:500,
image:"images/services/printing.jpg",
rating:"⭐ 4.9",
description:"High quality black and white and colour printing."
},


{
id:2,
name:"Document Typing & Formatting",
price:2500,
image:"images/services/typing.jpg",
rating:"⭐ 4.8",
description:"Professional typing and document formatting."
},


{
id:3,
name:"Lamination",
price:800,
image:"images/services/lamination.jpg",
rating:"⭐ 4.7",
description:"Protect your important documents."
},


{
id:4,
name:"Passport Photography",
price:1500,
image:"images/services/passport.jpg",
rating:"⭐ 4.9",
description:"Professional passport photographs."
},


{
id:5,
name:"Document Scanning",
price:600,
image:"images/services/scanning.jpg",
rating:"⭐ 4.6",
description:"Convert documents into digital files."
},


{
id:6,
name:"Graphics Design",
price:3000,
image:"images/services/design.jpg",
rating:"⭐ 5.0",
description:"Professional graphics and branding designs."
}


];





// GET SERVICE ID FROM URL


const params =
new URLSearchParams(window.location.search);


const id =
Number(params.get("id"));



const service =
services.find(item=>item.id===id);



if(!service){

alert("Service not found");

return;

}






// ELEMENTS


const image =
document.getElementById("serviceImage");


const name =
document.getElementById("serviceName");


const rating =
document.getElementById("rating");


const description =
document.getElementById("description");


const price =
document.getElementById("price");


const quantityText =
document.getElementById("quantity");



const plus =
document.getElementById("plus");


const minus =
document.getElementById("minus");



const locationBox =
document.getElementById("locationBox");



const deliveryMessage =
document.getElementById("deliveryMessage");



let quantity = 1;



// LOAD SERVICE DATA


image.src = service.image;

image.alt = service.name;


name.textContent =
service.name;


rating.textContent =
service.rating;


description.textContent =
service.description;



updatePrice();






// QUANTITY BUTTONS


plus.addEventListener("click",()=>{


quantity++;

quantityText.textContent =
quantity;


updatePrice();


});





minus.addEventListener("click",()=>{


if(quantity>1){

quantity--;

}


quantityText.textContent =
quantity;


updatePrice();


});








// PRICE UPDATE + DELIVERY CHECK


function updatePrice(){


const total =
service.price * quantity;


price.textContent =
"₦"+total.toLocaleString();



if(total >= 2000){


deliveryMessage.innerHTML =
"🚚 Delivery available for this order";


locationBox.style.display =
"block";


}else{


deliveryMessage.innerHTML =
"Pickup required. Add more items to qualify for delivery.";


locationBox.style.display =
"none";


}


}







// ORDER BUTTON


document
.getElementById("orderButton")
.addEventListener("click",()=>{



const notes =
document.getElementById("notes").value;


const location =
document.getElementById("location").value;



const file =
document.getElementById("fileUpload").files[0];





if(quantity < 1){

alert("Select quantity");

return;

}



if(location