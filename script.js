// =========================
// Image Gallery Popup
// =========================

let images = document.querySelectorAll(".gallery img");

let popup = document.getElementById("popup");
let popupImg = document.getElementById("popup-img");
let closeBtn = document.getElementById("close");


images.forEach(image => {

    image.onclick = function(){

        popup.style.display = "flex";

        popupImg.src = this.src;

    }

});


closeBtn.onclick = function(){

    popup.style.display = "none";

};



popup.onclick = function(e){

    if(e.target === popup){

        popup.style.display="none";

    }

};




// =========================
// Back To Top Button
// =========================

let topBtn = document.getElementById("topBtn");


window.onscroll = function(){

    if(window.scrollY > 500){

        topBtn.style.display="flex";

    }

    else{

        topBtn.style.display="none";

    }

};




// =========================
// Scroll Animation
// =========================

const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        let position = section.getBoundingClientRect().top;


        let screen = window.innerHeight;


        if(position < screen - 100){

            section.style.opacity="1";

            section.style.transform="translateY(0)";

        }


    });


});




// =========================
// Navbar Background Change
// =========================


let nav = document.querySelector("nav");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 100){

        nav.style.background="rgba(0,0,0,.95)";

    }

    else{

        nav.style.background="rgba(0,0,0,.75)";

    }


});
