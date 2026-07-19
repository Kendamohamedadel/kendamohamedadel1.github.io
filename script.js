document.addEventListener("DOMContentLoaded", function () {

    const title = document.querySelector(".hero h1");

    title.style.opacity = "0";
    title.style.transform = "translateY(-30px)";

    setTimeout(() => {
        title.style.transition = "1s";
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
    }, 300);

});
