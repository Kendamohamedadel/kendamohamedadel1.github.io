// =========================
// Image Gallery Popup
// =========================

const images = document.querySelectorAll(".gallery img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close");

images.forEach((image) => {

    image.addEventListener("click", () => {

        popup.style.display = "flex";

        popupImg.src = image.src;

        popupImg.alt =
            image.alt || "Kenda Mohamed Adel";

        document.body.style.overflow = "hidden";

    });

});


function closePopup() {

    popup.style.display = "none";

    document.body.style.overflow = "";

}


if (closeBtn) {

    closeBtn.addEventListener(
        "click",
        closePopup
    );

}


if (popup) {

    popup.addEventListener("click", (e) => {

        if (e.target === popup) {

            closePopup();

        }

    });

}


// =========================
// ESC closes image popup
// =========================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closePopup();

    }

});


// =========================
// Back To Top Button
// =========================

const topBtn =
    document.getElementById("topBtn");

const nav =
    document.querySelector("nav");


window.addEventListener("scroll", () => {


    // Back To Top

    if (window.scrollY > 500) {

        if (topBtn) {

            topBtn.style.display = "flex";

        }

    } else {

        if (topBtn) {

            topBtn.style.display = "none";

        }

    }


    // Navbar

    if (nav) {

        if (window.scrollY > 100) {

            nav.style.background =
                "rgba(0,0,0,.95)";

        } else {

            nav.style.background =
                "rgba(0,0,0,.85)";

        }

    }

});


// =========================
// Smooth Back To Top
// =========================

if (topBtn) {

    topBtn.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// =========================
// Section Scroll Animation
// =========================

const sections =
    document.querySelectorAll("section");


const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});


// =========================
// Counter Animation
// =========================

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {

                    return;

                }


                const counter =
                    entry.target;


                const target =
                    Number(
                        counter.dataset.target
                    );


                let current = 0;


                const duration = 1200;

                const startTime =
                    performance.now();


                function updateCounter(
                    currentTime
                ) {


                    const progress =
                        Math.min(

                            (
                                currentTime -
                                startTime
                            ) / duration,

                            1

                        );


                    current =
                        Math.floor(
                            progress * target
                        );


                    counter.textContent =
                        current;


                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target;

                    }

                }


                requestAnimationFrame(
                    updateCounter
                );


                observer.unobserve(counter);

            });

        },

        {
            threshold: 0.6
        }

    );


counters.forEach((counter) => {

    counterObserver.observe(counter);

});
