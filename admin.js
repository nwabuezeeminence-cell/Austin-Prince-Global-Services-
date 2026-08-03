// =================================
// AUSTIN GLOBAL SERVICES
// ADMIN LOGIN SYSTEM
// =================================


import { initializeApp } 
from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import {

getAuth,
signInWithEmailAndPassword

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";





const firebaseConfig = {


apiKey: "YOUR_API_KEY",

authDomain:
"YOUR_PROJECT.firebaseapp.com",

projectId:
"YOUR_PROJECT_ID",

storageBucket:
"YOUR_PROJECT.appspot.com",

messagingSenderId:
"YOUR_SENDER_ID",

appId:
"YOUR_APP_ID"


};





const app =
initializeApp(firebaseConfig);



const auth =
getAuth(app);







const loginBtn =
document.getElementById("loginBtn");



loginBtn.addEventListener("click",()=>{


const email =
document.getElementById("email").value.trim();



const password =
document.getElementById("password").value.trim();



const message =
document.getElementById("message");




if(!email || !password){


message.textContent =
"Please fill all fields";


return;

}






signInWithEmailAndPassword(

auth,

email,

password

)

.then(()=>{


message.textContent =
"Login successful";


setTimeout(()=>{


window.location.href =
"dashboard.html";


},1000);



})

.catch(error=>{


message.textContent =
"Login failed: "
+
error.message;


});



});