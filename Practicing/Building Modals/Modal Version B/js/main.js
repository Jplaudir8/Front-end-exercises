// Getting modal element
let overlay = document.getElementById('simpleOverlay');

// Getting open modal button
let modalBtn = document.getElementById('modalBtn');

// Getting close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];


// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', clickOutside);

function openModal() {
    overlay.style.display = 'block';
}

function closeModal() {
    overlay.style.display = 'none';
}

function clickOutside (e) { // Passing in an event parameter to check if target is the overlay.
    if (e.target == overlay) {
        overlay.style.display = 'none';
    }
}