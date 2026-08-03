// =====================================
// AUSTIN GLOBAL SERVICES
// ADMIN DASHBOARD
// =====================================


import { initializeApp }

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";



import {

getFirestore,
collection,
onSnapshot,
doc,
updateDoc,
deleteDoc

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



import {

getAuth,
signOut,
onAuthStateChanged

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";






const firebaseConfig = {


apiKey:"YOUR_API_KEY",

authDomain:"YOUR_PROJECT.firebaseapp.com",

projectId:"YOUR_PROJECT_ID",

storageBucket:"YOUR_PROJECT.appspot.com",

messagingSenderId:"YOUR_SENDER_ID",

appId:"YOUR_APP_ID"


};






const app =
initializeApp(firebaseConfig);



const db =
getFirestore(app);



const auth =
getAuth(app);





const ordersContainer =
document.getElementById("ordersContainer");





// Check admin login


onAuthStateChanged(auth,(user)=>{


if(!user){


window.location.href =
"login.html";


}


});







// Load orders


onSnapshot(

collection(db,"orders"),

(snapshot)=>{


ordersContainer.innerHTML="";



if(snapshot.empty){


ordersContainer.innerHTML =
"<p>No orders yet</p>";

return;


}





snapshot.forEach((order)=>{



const data =
order.data();



const box =
document.createElement("div");



box.className =
"order-card";




box.innerHTML =

`

<h3>
${data.customerName}
</h3>


<p>
Phone:
${data.phone}
</p>


<p>
Total:
₦${data.total}
</p>


<p>
Status:
<span>
${data.status}
</span>
</p>



<p>
Address:
${data.address}
</p>



<a 
href="${data.file}"
target="_blank">

Open Document

</a>




<select id="status-${order.id}">


<option>
Pending
</option>

<option>
Processing
</option>

<option>
Ready
</option>

<option>
Delivered
</option>


</select>



<button onclick="changeStatus('${order.id}')">

Update

</button>



<button 
class="delete"
onclick="removeOrder('${order.id}')">

Delete

</button>


`;



ordersContainer.appendChild(box);



});



});








// Update status


window.changeStatus =
async function(id){


const select =
document.getElementById(
"status-"+id
);



await updateDoc(

doc(db,"orders",id),

{

status:
select.value

}

);



alert(
"Status updated"
);



}







// Delete order


window.removeOrder =
async function(id){



if(confirm("Delete this order?")){


await deleteDoc(

doc(db,"orders",id)

);


}


}








// Logout


document
.getElementById("logoutBtn")
.addEventListener("click",()=>{


signOut(auth);


});