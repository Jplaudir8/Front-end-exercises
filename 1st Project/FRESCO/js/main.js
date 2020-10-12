var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Helper method
function showSlides(n) {
    console.log("n = " + n + " and slideIndex = " + slideIndex);
    var slides = document.getElementsByClassName("mySlides"); // currently 3 slides
    var dots = document.getElementsByClassName("dot"); // currently 3 dots

    if (n > slides.length) 
        slideIndex = 1
    
    if (n < 1) 
        slideIndex = slides.length
    
    // Removes all the images
    for (var i = 0; i < slides.length; i++) 
        slides[i].style.display = "none";
    
    // Removes all elements with class 'active'
    for (var i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");
    
    slides[slideIndex - 1].style.display = "block"; // Shows desired image.
    dots[slideIndex - 1].className += " active"; // Changes dot color to look active.
}