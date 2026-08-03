// ======================================
// AUSTIN GLOBAL SERVICES
// SHOPPING CART SYSTEM
// ======================================


document.addEventListener("DOMContentLoaded",()=>{


const cartContainer =
document.getElementById("cartItems");


const totalItems =
document.getElementById("totalItems");


const totalPrice =
document.getElementById("totalPrice");




// Get saved cart

let cart =
JSON.parse(localStorage.getItem("austinCart")) || [];





function saveCart(){

localStorage.setItem(
"austinCart",
JSON.stringify(cart)
);

}







function displayCart(){


if(!cartContainer) return;



cartContainer.innerHTML="";



let items = 0;

let total = 0;



if(cart.length===0){


cartContainer.innerHTML =
`
<h3 style="text-align:center;">
Your cart is empty
</h3>
`;



totalItems.textContent=0;

totalPrice.textContent="₦0";


return;

}






cart.forEach((item,index)=>{


items += item.quantity;


total += item.price * item.quantity;





const div =
document.createElement("div");



div.className="cart-item";



div.innerHTML =

`

<img src="${item.image}">


<div class="cart-info">

<h3>
${item.name}
</h3>


<p>
₦${item.price.toLocaleString()}
</p>


</div>



<div class="quantity-control">


<button onclick="changeQuantity(${index},-1)">
-
</button>


<span>
${item.quantity}
</span>


<button onclick="changeQuantity(${index},1)">
+
</button>


</div>




<button class="remove-btn"
onclick="removeItem(${index})">

Remove

</button>


`;



cartContainer.appendChild(div);



});





totalItems.textContent =
items;


totalPrice.textContent =
"₦"+total.toLocaleString();



}





// Increase/decrease quantity


window.changeQuantity =
function(index,value){



cart[index].quantity += value;



if(cart[index].quantity < 1){

cart[index].quantity = 1;

}



saveCart();

displayCart();


}







// Remove item


window.removeItem =
function(index){


cart.splice(index,1);


saveCart();


displayCart();


}






// Checkout


const checkout =
document.getElementById("checkoutBtn");



if(checkout){


checkout.addEventListener("click",()=>{


if(cart.length===0){

alert("Your cart is empty");

return;

}



window.location.href="checkout.html";


});


}






displayCart();


});