let openModalBtn = document.getElementById("open-modal-btn");

openModalBtn.addEventListener("click", function() {
    console.log("Opened Modal");
    document.getElementById("overlay").style.display = "block";
});

let closeModalBtn = document.getElementById("close-modal-btn");

closeModalBtn.addEventListener("click", function() {
    console.log("Closed Modal");
    document.getElementById("overlay").style.display = "none";
});

