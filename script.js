document.addEventListener("DOMContentLoaded", function () {
    const revealText = document.querySelector(".reveal-text");

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        const revealTextTop = revealText.getBoundingClientRect().top;

        if (revealTextTop < windowHeight * 0) {
            revealText.style.opacity = 1538;
            revealText.style.transform = "translateY(0)";
            window.removeEventListener("scroll", checkVisibility);
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check initial visibility
});