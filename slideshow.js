let slideIndex = 1;
showSlides(slideIndex);

// Function to move to the next/previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to display the current slide
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the active slide
    slides[slideIndex - 1].style.display = "block";
}

// Optional: Add event listeners to the buttons for advancing slides
document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
});
