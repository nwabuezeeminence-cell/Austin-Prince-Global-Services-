// ======================================
// AUSTIN GLOBAL SERVICES
// SERVICES MARKETPLACE
// ======================================

document.addEventListener("DOMContentLoaded", () => {

const services = [

{
id:1,
name:"Printing & Photocopying",
price:500,
rating:"⭐ 4.9",
image:"images/services/printing.jpg",
description:"High-quality black & white and colour printing."
},

{
id:2,
name:"Document Typing & Formatting",
price:2500,
rating:"⭐ 4.8",
image:"images/services/typing.jpg",
description:"Professional typing and formatting."
},

{
id:3,
name:"Lamination",
price:800,
rating:"⭐ 4.8",
image:"images/services/lamination.jpg",
description:"Protect your important documents."
},

{
id:4,
name:"Passport Photography",
price:1500,
rating:"⭐ 4.9",
image:"images/services/passport.jpg",
description:"Professional passport photographs."
},

{
id:5,
name:"Binding",
price:1200,
rating:"⭐ 4.7",
image:"images/services/binding.jpg",
description:"Spiral and hard cover binding."
},

{
id:6,
name:"Document Scanning",
price:600,
rating:"⭐ 4.7",
image:"images/services/scanning.jpg",
description:"Convert paper documents into digital files."
},

{
id:7,
name:"Graphics Design",
price:3000,
rating:"⭐ 5.0",
image:"images/services/design.jpg",
description:"Logos, flyers, banners, business cards and more."
},

{
id:8,
name:"PDF Conversion",
price:1000,
rating:"⭐ 4.8",
image:"images/services/pdf.jpg",
description:"Convert Word, Excel and images to PDF."
}

];

const container = document.getElementById("serviceContainer");
const searchBox = document.getElementById("searchBox");

function renderServices(list){

container.innerHTML="";

if(list.length===0){

container.innerHTML=`
<h2 style="grid-column:1/-1;text-align:center;">
No services found.
</h2>
`;

return;

}

list.forEach(service=>{

const card=document.createElement("div");

card.className="service-card";

card.innerHTML=`

<img src="${service.image}" alt="${service.name}">

<div class="service-content">

<h2>${service.name}</h2>

<div class="rating">${service.rating}</div>

<p>${service.description}</p>

<div class="price">
₦${service.price.toLocaleString()}
</div>

<div class="service-buttons">

<button
class="details-btn"
data-id="${service.id}">
View Details
</button>

<button
class="cart-btn"
data-id="${service.id}">
Add To Cart
</button>

</div>

</div>

`;

container.appendChild(card);

});

attachEvents();

}

function attachEvents(){

document.querySelectorAll(".details-btn").forEach(button=>{

button.addEventListener("click",()=>{

const id=button.dataset.id;

window.location.href=
`service-details.html?id=${id}`;

});

});

document.querySelectorAll(".cart-btn").forEach(button=>{

button.addEventListener("click",()=>{

const id=Number(button.dataset.id);

const service=
services.find(item=>item.id===id);

let cart=
JSON.parse(localStorage.getItem("austinCart"))||[];

const existing=
cart.find(item=>item.id===id);

if(existing){

existing.quantity++;

}else{

cart.push({

id:service.id,
name:service.name,
price:service.price,
image:service.image,
quantity:1

});

}

localStorage.setItem(
"austinCart",
JSON.stringify(cart)
);

button.textContent="✓ Added";

setTimeout(()=>{

button.textContent="Add To Cart";

},1500);

});

});

}

searchBox.addEventListener("input",()=>{

const keyword=
searchBox.value.toLowerCase();

const filtered=
services.filter(service=>

service.name.toLowerCase().includes(keyword) ||

service.description.toLowerCase().includes(keyword)

);

renderServices(filtered);

});

renderServices(services);

});