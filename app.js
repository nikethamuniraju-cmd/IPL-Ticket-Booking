
// Show Toast Message
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


// Smooth Scrolling
function scrollToBooking() {

    const booking = document.getElementById("booking");

    if (booking) {
        booking.scrollIntoView({
            behavior: "smooth"
        });

        showToast("Ready to book your IPL tickets!");
    }
}


// Activity 7: Selector Forms and Live Interaction
document.addEventListener("DOMContentLoaded", function () {

    // Get form elements using DOM selectors
    const match = document.getElementById("match");
    const stand = document.getElementById("stand");
    const quantity = document.getElementById("qty");

    const bookingForm = document.getElementById("bookingForm");

    // Get Booking Summary elements
    const summaryMatch = document.getElementById("summaryMatch");
    const summaryStand = document.getElementById("summaryStand");
    const summaryQuantity = document.getElementById("summaryQuantity");
    const ticketPrice = document.getElementById("ticketPrice");
    const totalPrice = document.getElementById("totalPrice");


    // Ticket prices for each match
    const prices = {

        "CSK vs MI": {
            "General": 1500,
            "Premium": 3500,
            "VIP": 7500
        },

        "RCB vs KKR": {
            "General": 1800,
            "Premium": 4000,
            "VIP": 8000
        },

        "SRH vs MI": {
            "General": 1400,
            "Premium": 3200,
            "VIP": 7000
        },

        "KKR vs CSK": {
            "General": 1600,
            "Premium": 3800,
            "VIP": 7800
        }

    };


    // Calculate and update Booking Summary
    function updateSummary() {

        const selectedMatch = match.value;
        const selectedStand = stand.value;
        const tickets = Number(quantity.value);

        const price = prices[selectedMatch]?.[selectedStand] || 0;

        const total = price * tickets;

        summaryMatch.innerText =
            selectedMatch || "Not Selected";

        summaryStand.innerText =
            selectedStand || "Not Selected";

        summaryQuantity.innerText = tickets;

        ticketPrice.innerText = "₹" + price;

        totalPrice.innerText = "₹" + total;

        showToast("Booking Summary Updated!");
    }


    // Change event listeners
    match.addEventListener("change", updateSummary);

    stand.addEventListener("change", updateSummary);

    quantity.addEventListener("change", updateSummary);


    // Form submission
    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!bookingForm.checkValidity()) {
            bookingForm.reportValidity();
            return;
        }

        updateSummary();

        showToast("Booking Details Confirmed!");
    });


    // Book button interaction
    const buttons = document.querySelectorAll(".book-btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            match.value = button.dataset.match;

            scrollToBooking();

            updateSummary();

        });

    });

});
