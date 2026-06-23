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
