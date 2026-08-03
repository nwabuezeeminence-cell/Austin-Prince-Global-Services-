// ======================================
// HERO SECTION
// ======================================

const hero = document.querySelector(".hero");

const heroImages = [

"images/banners/banner1.jpg",

"images/banners/banner2.jpg",

"images/banners/banner3.jpg",

"images/banners/banner4.jpg",

"images/banners/banner5.jpg"

];

let currentHero = 0;

function changeHeroImage(){

    if(!hero) return;

    hero.style.backgroundImage =
    `linear-gradient(rgba(15,23,42,.75),rgba(15,23,42,.80)),
    url('${heroImages[currentHero]}')`;

    currentHero++;

    if(currentHero >= heroImages.length){

        currentHero = 0;

    }

}

changeHeroImage();

setInterval(changeHeroImage,5000);

// ===============================
// HERO BUTTON ANIMATION
// ===============================

document.querySelectorAll(".hero-buttons a").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

// ===============================
// SEARCH BOX
// ===============================

const heroSearch=document.querySelector(".search-box input");

const heroButton=document.querySelector(".search-box button");

if(heroButton){

heroButton.addEventListener("click",()=>{

const keyword=heroSearch.value.trim();

if(keyword===""){

alert("Please enter a service.");

return;

}

window.location.href=
`services.html?search=${encodeURIComponent(keyword)}`;

});

}

if(heroSearch){

heroSearch.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

heroButton.click();

}

});

}