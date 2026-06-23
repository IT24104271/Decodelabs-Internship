/*=========================
Subscribe
=========================*/

const subscribeBtn = document.querySelector(".subscribe button");

const emailInput = document.querySelector(".subscribe input");

subscribeBtn.addEventListener("click", async () => {

const email = emailInput.value.trim();

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(email === ""){

    alert("Please enter your email.");

    return;

}

if(!pattern.test(email)){

    alert("Please enter a valid email address.");

    return;

}

try{

    const response = await fetch("http://localhost:5000/api/subscribers", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email
        })

    });

    const data = await response.json();

    alert(data.message);

    emailInput.value = "";

}
catch(error){

    console.error(error);

    alert("Subscription failed!");

}

});

/*=========================
Dark Mode
=========================*/

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});

/*=========================
Add To Cart
=========================*/

let cart = [];

const cartBtn = document.querySelector(".cart-btn");

const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const productCard = button.closest(".product-card");

        const productName = productCard.querySelector("h3").textContent;

        cart.push(productName);

        cartBtn.innerHTML = `🛒 ${cart.length}`;

    });

});

cartBtn.addEventListener("click", () => {

    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    let message = "Items in Cart:\n\n";

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item}\n`;
    });

    alert(message);

});
