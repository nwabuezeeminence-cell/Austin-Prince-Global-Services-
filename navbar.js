// ======================================
// NAVIGATION SYSTEM
// ======================================

const header = document.querySelector("header");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("header-scrolled");

    }else{

        header.classList.remove("header-scrolled");

    }

});

// Mobile Menu

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("show-menu");

});

}

// Close menu when a link is clicked

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

if(navMenu){

navMenu.classList.remove("show-menu");

}

});

});

// Highlight active page

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

const href = link.getAttribute("href");

if(href === currentPage){

link.classList.add("active");

}

});