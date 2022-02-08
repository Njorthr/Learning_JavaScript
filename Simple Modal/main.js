// Variables
const modal = document.querySelector("#simpleModal");
const modalBtn = document.querySelector("#modalBtn");
const closeBtn = document.querySelector(".closeBtn");

// Events

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

// Function

function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
function clickOutside(e) {
    if (e.target == modal) {
    modal.style.display = "none";
    }    
}