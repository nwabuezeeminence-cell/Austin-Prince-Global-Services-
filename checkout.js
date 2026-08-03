// ======================================
// AUSTIN GLOBAL SERVICES
// CHECKOUT SYSTEM
// ======================================

import {db,storage} from "./firebase.js";


import {

collection,
addDoc,
serverTimestamp

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



import {

ref,
uploadBytes,
getDownloadURL

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
document.addEventListener("DOMContentLoaded",()=>{


const itemsContainer =
document.getElementById("checkoutItems");


const totalDisplay =
document.getElementById("checkoutTotal");



let cart =
JSON.parse(localStorage.getItem("austinCart")) || [];





let total = 0;





function loadCheckout(){


itemsContainer.innerHTML="";


if(cart.length===0){


itemsContainer.innerHTML =
`
<p>
Your cart is empty.
</p>
`;

return;

}




cart.forEach(item=>{


total += item.price * item.quantity;



const product =
document.createElement("div");


product.className =
"checkout-product";



product.innerHTML =

`

<img src="${item.image}">


<div>

<h3>
${item.name}
</h3>


<p>
Quantity: ${item.quantity}
</p>


<p>
₦${(item.price * item.quantity).toLocaleString()}
</p>


</div>

`;



itemsContainer.appendChild(product);



});





totalDisplay.textContent =
"₦"+total.toLocaleString();



}



loadCheckout();








// PLACE ORDER


document
.getElementById("placeOrder")
.addEventListener("click",()=>{



const name =
document.getElementById("customerName").value.trim();


const phone =
document.getElementById("customerPhone").value.trim();


const email =
document.getElementById("customerEmail").value.trim();


const address =
document.getElementById("customerAddress").value.trim();






if(!name || !phone){

alert(
"Please enter your name and phone number"
);

return;

}





// DELIVERY RULE


if(total >= 2000 && !address){


alert(
"Please enter your delivery location"
);

return;


}








let message =

`
NEW ORDER - AUSTIN GLOBAL SERVICES

Customer:
${name}

Phone:
${phone}

Email:
${email || "Not provided"}


ORDER DETAILS:

`;





cart.forEach(item=>{


message +=

`
${item.name}
Quantity: ${item.quantity}
Amount: ₦${item.price * item.quantity}

`;


});



message +=

`
TOTAL:
₦${total}


Delivery Address:
${address || "Customer pickup"}

`;






// Send order to WhatsApp


const businessNumber =
"2349115643951";



window.open(

"https://wa.me/"
+
businessNumber
+
"?text="
+
encodeURIComponent(message),

"_blank"

);

const order = {


customerName:name,

phone:phone,

email:email,


address:
address || "Pickup",


items:cart,


total:total,


file:fileURL,


status:"Pending",


createdAt:
serverTimestamp()


};



await addDoc(

collection(db,"orders"),

order

);



// clear cart


localStorage.removeItem(
"austinCart"
);



alert(
"Order sent successfully!"
);

const file =
document.getElementById("customerFile").files[0];


let fileURL = "";



if(file){


const storageRef =
ref(
storage,
"customer_uploads/"
+
Date.now()
+
"_"
+
file.name
);



const upload =
await uploadBytes(
storageRef,
file
);



fileURL =
await getDownloadURL(
upload.ref
);


}

window.location.href =
"index.html";



});



});