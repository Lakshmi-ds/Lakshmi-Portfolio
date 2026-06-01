// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {
entry.target.classList.add("show");
}

});

}, {
threshold: 0.2
});

const hiddenElements = document.querySelectorAll(
'.card, .project-card, .glass-card'
);

hiddenElements.forEach((el) => {

el.classList.add("hidden");

observer.observe(el);

});


// Navbar Background Change on Scroll

window.addEventListener("scroll", () => {

const nav = document.querySelector("nav");

if (window.scrollY > 50) {

nav.style.background = "rgba(255,255,255,0.85)";
nav.style.backdropFilter = "blur(25px)";
nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";

} else {

nav.style.background = "rgba(255,255,255,0.6)";
nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";

}

});


// Smooth Scroll for Navigation Links

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

const target = document.querySelector(
this.getAttribute('href')
);

target.scrollIntoView({
behavior: 'smooth'
});

});

});


// Typing Effect for Hero Subtitle

const text =
"UI/UX Designer & Frontend Developer";

const typingElement =
document.querySelector(".hero h2");

typingElement.textContent = "";

let index = 0;

function typeText() {

if(index < text.length){

typingElement.textContent += text.charAt(index);

index++;

setTimeout(typeText, 80);

}

}

window.addEventListener("load", typeText);


// Floating Animation for Blobs

const blobs =
document.querySelectorAll(".blob");

window.addEventListener("mousemove", (e) => {

const x = e.clientX / window.innerWidth;
const y = e.clientY / window.innerHeight;

blobs.forEach((blob, index) => {

const speed = (index + 1) * 20;

blob.style.transform =
`translate(${x * speed}px, ${y * speed}px)`;

});

});


// Project Button Hover Effect

const projectButtons =
document.querySelectorAll(".project-btn");

projectButtons.forEach(button => {

button.addEventListener("mouseenter", () => {

button.style.transform =
"scale(1.05)";

});

button.addEventListener("mouseleave", () => {

button.style.transform =
"scale(1)";

});

});