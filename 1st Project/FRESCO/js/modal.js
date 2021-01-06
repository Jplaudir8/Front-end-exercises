/**************
 Modal
***************/
let overlay = document.getElementById("overlay");
let openModalBtn = document.getElementById("open-modal-btn");
let closeModalBtn = document.getElementsByClassName("closeBtn")[0];

openModalBtn.addEventListener("click", function() {
    overlay.style.display = "block";
});

closeModalBtn.addEventListener("click", function() {
    overlay.style.display = "none";
});

// Listen for outside click
window.addEventListener("click", clickOutside);

function clickOutside (e) {
    if (e.target == overlay) {
        overlay.style.display = "none";
    }
}