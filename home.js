const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");
});
// Simple search placeholder
document.getElementById("searchBtn").addEventListener("click", () => {

    const value =
        document.getElementById("serviceSearch").value.trim();

    if(value===""){

        alert("Please enter a service name.");

        return;

    }

    window.location.href =
        "services.html?search=" +
        encodeURIComponent(value);

});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const speed = target / 100;

    const update = () => {

        count += speed;

        if(count < target){

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        }else{

            counter.innerText = target.toLocaleString() + "+";

        }

    };

    update();

});
// FAQ Accordion
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button=>{

button.addEventListener("click",()=>{

const answer = button.nextElementSibling;

answer.style.display =
answer.style.display==="block"
? "none"
: "block";

});

});
// Back To Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.style.display = "block";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});