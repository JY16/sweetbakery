// Mobile Navigation

function mobileNav() {
    let menuToggle = document.querySelector(".menu-toggle");
    let nav = document.querySelector(".mobile-nav");

    menuToggle.addEventListener("click", function() {
        if (nav.style.display === "flex") {
            nav.style.display = "none";
        }
        else {
            nav.style.display = "flex";
        }
    });
}

mobileNav();
