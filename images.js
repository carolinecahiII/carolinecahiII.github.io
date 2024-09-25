// Declare slideIndices once and only if it's not already declared
if (typeof slideIndices === 'undefined') {
    var slideIndices = { 1: 1, 2: 1, 3: 1, 4: 1 }; // For each project
}

// Show the first slide for each project
showSlides(1, 1); // Project 1
showSlides(1, 2); // Project 2
showSlides(1, 3); // Project 3
showSlides(1, 4); // Project 4

// Next/previous controls
function plusSlides(n, project) {
    showSlides(slideIndices[project] += n, project);
}

// Show slides based on index and project
function showSlides(n, project) {
    let slides = document.querySelectorAll(".mySlides-" + project);
    
    if (slides.length === 0) {
        console.error(`No slides found for project ${project}`);
        return; // Avoid errors if no slides are found
    }
    
    if (n > slides.length) {
        slideIndices[project] = 1;
    }
    if (n < 1) {
        slideIndices[project] = slides.length;
    }
    
    // Hide all slides for the specific project
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Show the current slide for the specific project
    slides[slideIndices[project] - 1].style.display = "block";
}
