// Christian Enlightenment - Website Scripts

// Welcome message when the page loads
window.addEventListener("load", function () {
    console.log("Welcome to Christian Enlightenment | The Spirit is God Fellowship");
});


// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Simple prayer request message
function prayerSubmitted() {
    alert(
        "Thank you for submitting your prayer request. " +
        "Our community will remember you in prayer."
    );
}


// Donation button message
function donationMessage() {
    alert(
        "Thank you for your willingness to support the ministry."
    );
}


// Current year automatically updates in the footer
const year = new Date().getFullYear();

const footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.textContent = year;
}