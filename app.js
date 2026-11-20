
function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }

    toast.innerText = message;
    toast.style.display = "block";

    setTimeout(function () {
        toast.style.display = "none";
    }, 3000);
}

// Smooth scrolling
function scrollToBooking() {
    const booking = document.getElementById("booking");

    if (booking) {
        booking.scrollIntoView({
            behavior: "smooth"
        });

        showToast("Ready to book your IPL tickets!");
    }
}

// Book button interaction
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".book-btn");

    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            scrollToBooking();
        });
    });
});
