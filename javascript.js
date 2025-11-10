// Simple form alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting us! We'll get back to you soon.");
  this.reset();
});

// Buy button click action
const buyButtons = document.querySelectorAll(".buy-btn");
buyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Purchase feature coming soon!");
  });
});
