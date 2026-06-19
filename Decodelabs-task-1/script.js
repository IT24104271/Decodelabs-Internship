/*=========================
RV Creations Gift Shop
=========================*/

// Dark / Light Mode

const themeBtn = document.getElementById("theme-btn");

const cartBtn = document.querySelector(".cart-btn");

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

let cartCount = 0;

let cartItems = [];

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.innerHTML="☀️";

}
else{

themeBtn.innerHTML="🌙";

}

});

if(menuBtn && navLinks){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

const isOpen=navLinks.classList.contains("active");

menuBtn.setAttribute("aria-expanded",isOpen);

menuBtn.innerHTML=isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';

});

}



cartBtn.addEventListener("click",()=>{

if(cartItems.length===0){

alert("Your cart is empty.");

return;

}

alert("Cart Items:\n"+cartItems.join("\n"));

});



/*=========================
Back To Top Button
=========================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}
else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});



/*=========================
Smooth Scroll Buttons
=========================*/

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const linkTarget=this.getAttribute("href");

if(linkTarget==="#"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
else{

const target=document.querySelector(linkTarget);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

}

if(navLinks && menuBtn){

navLinks.classList.remove("active");
menuBtn.setAttribute("aria-expanded","false");
menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

}

});

});



/*=========================
Subscribe
=========================*/

const subscribeBtn=document.querySelector(".subscribe button");

const emailInput=document.querySelector(".subscribe input");

subscribeBtn.addEventListener("click",()=>{

const email=emailInput.value.trim();

const pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(email===""){

alert("Please enter your email.");

return;

}

if(!pattern.test(email)){

alert("Please enter a valid email address.");

return;

}

alert("🎉 Thank you for subscribing to RV Creations!");

emailInput.value="";

});



/*=========================
Explore More Buttons
=========================*/

const productButtons=document.querySelectorAll(".product-card button");

productButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

const productName=btn.closest(".product-card").querySelector("h3").textContent;

cartCount++;

cartItems.push(productName);

cartBtn.innerHTML="🛒 "+cartCount;

alert(productName+" added to cart!");

});

});

const categoryButtons=document.querySelectorAll(".category-card button");

categoryButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("More gift collections coming soon!");

});

});



/*=========================
Hero Buttons
=========================*/

const shopBtn=document.querySelector(".primary-btn");

const exploreBtn=document.querySelector(".secondary-btn");

if(shopBtn){

shopBtn.addEventListener("click",()=>{

document.getElementById("products").scrollIntoView({

behavior:"smooth"

});

});

}

if(exploreBtn){

exploreBtn.addEventListener("click",()=>{

document.getElementById("categories").scrollIntoView({

behavior:"smooth"

});

});

}



/*=========================
Card Animation
=========================*/

const cards=document.querySelectorAll(".product-card,.category-card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="0.8s";

observer.observe(card);

});



/*=========================
Navbar Shadow
=========================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 5px 20px rgba(0,0,0,0.15)";

}
else{

header.style.boxShadow="0 2px 10px rgba(0,0,0,0.08)";

}

});



/*=========================
Simple Image Hover Effect
=========================*/

const images=document.querySelectorAll(".product-card img,.category-card img");

images.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";
img.style.transition=".4s";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});



console.log("RV Creations Gift Shop Loaded Successfully 🚀");
