// ======================================================
// Kenda Mohamed Adel - Main Website JavaScript
// Official Website
// ======================================================


// ======================================================
// Image Gallery Popup
// ======================================================

const images = document.querySelectorAll(".gallery img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close");


if (images.length && popup && popupImg) {

    images.forEach((image) => {

        image.addEventListener("click", () => {

            popup.style.display = "flex";

            popupImg.src = image.src;

            popupImg.alt =
                image.alt || "Kenda Mohamed Adel - Taekwondo Champion";

            document.body.style.overflow = "hidden";

        });

    });

}


// ======================================================
// Close Gallery Popup
// ======================================================

function closePopup() {

    if (!popup) {
        return;
    }

    popup.style.display = "none";

    document.body.style.overflow = "";

}


// Close button

if (closeBtn) {

    closeBtn.addEventListener(
        "click",
        closePopup
    );

}


// Close by clicking outside image

if (popup) {

    popup.addEventListener("click", (event) => {

        if (event.target === popup) {

            closePopup();

        }

    });

}


// ======================================================
// ESC - Close Image Popup
// ======================================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closePopup();

    }

});


// ======================================================
// Back To Top Button
// ======================================================

const topBtn =
    document.getElementById("topBtn");

const nav =
    document.querySelector("nav");


function handleScroll() {

    const scrollPosition =
        window.scrollY;


    // ------------------------------------------
    // Back To Top
    // ------------------------------------------

    if (topBtn) {

        if (scrollPosition > 500) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    }


    // ------------------------------------------
    // Navbar Background
    // ------------------------------------------

    if (nav) {

        if (scrollPosition > 100) {

            nav.style.background =
                "rgba(0,0,0,.95)";

        } else {

            nav.style.background =
                "rgba(0,0,0,.85)";

        }

    }

}


window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
);


// Run once when page loads

handleScroll();


// ======================================================
// Smooth Back To Top
// ======================================================

if (topBtn) {

    topBtn.addEventListener("click", (event) => {

        event.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ======================================================
// Smooth Navigation
// ======================================================

const navigationLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (!target) {
            return;
        }


        event.preventDefault();


        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


// ======================================================
// Section Scroll Animation
// ======================================================

const sections =
    document.querySelectorAll("section");


if ("IntersectionObserver" in window) {

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

} else {

    // Fallback for older browsers

    sections.forEach((section) => {

        section.classList.add("visible");

    });

}


// ======================================================
// Counter Animation
// ======================================================

const counters =
    document.querySelectorAll(".counter");


if (
    counters.length &&
    "IntersectionObserver" in window
) {

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


                    if (
                        !Number.isFinite(target) ||
                        target < 0
                    ) {

                        return;

                    }


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

} else {

    // Fallback

    counters.forEach((counter) => {

        const target =
            Number(
                counter.dataset.target
            );


        if (Number.isFinite(target)) {

            counter.textContent =
                target;

        }

    });

}


// ======================================================
// Native Share
// ======================================================
// Optional.
// If an element has class="share-btn",
// it can share the official Kenda website.
//
// Example:
// <button class="share-btn">Share</button>
// ======================================================

const shareButtons =
    document.querySelectorAll(".share-btn");


shareButtons.forEach((button) => {

    button.addEventListener("click", async () => {

        const shareData = {

            title:
                document.title ||
                "Kenda Mohamed Adel | Egyptian Taekwondo Champion",

            text:
                "Kenda Mohamed Adel - Egyptian Taekwondo Champion",

            url:
                window.location.href

        };


        try {

            if (navigator.share) {

                await navigator.share(
                    shareData
                );

            } else {

                await navigator.clipboard.writeText(
                    window.location.href
                );


                const originalText =
                    button.textContent;


                button.textContent =
                    "Link Copied";


                setTimeout(() => {

                    button.textContent =
                        originalText;

                }, 2000);

            }

        } catch (error) {

            // User cancelled sharing.
            // No action required.

        }

    });

});


// ======================================================
// External Social Links
// ======================================================
// Keep Facebook, Instagram and TikTok links
// opening safely in a new tab.
// ======================================================

const socialLinks =
    document.querySelectorAll(
        'a[href*="facebook.com"], ' +
        'a[href*="instagram.com"], ' +
        'a[href*="tiktok.com"]'
    );


socialLinks.forEach((link) => {

    link.setAttribute(
        "target",
        "_blank"
    );

    link.setAttribute(
        "rel",
        "noopener noreferrer"
    );

});


// ======================================================
// Accessibility - Gallery Images
// ======================================================

images.forEach((image) => {

    if (!image.alt || !image.alt.trim()) {

        image.alt =
            "Kenda Mohamed Adel - Egyptian Taekwondo Champion";

    }

});


// ======================================================
// Page Ready
// ======================================================

document.documentElement.classList.add(
    "js-enabled"
);
