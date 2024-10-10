document.addEventListener("DOMContentLoaded", function () {
    console.log("Flow Former website loaded!");

    // Show "scroll-to-top" button when scrolling
    window.addEventListener("scroll", function () {
        const scrollToTop = document.getElementById("scroll-to-top");
        if (window.scrollY > 300) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }
    });
});
