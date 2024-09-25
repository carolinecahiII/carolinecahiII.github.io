// Toggle button for expanding project content
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const project = this.closest('.project');
        const content = project.querySelector('.project-content');
        
        // Check if content exists
        if (content) {
            project.classList.toggle('open');
            if (project.classList.contains('open')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                this.textContent = '−'; // Change to minus when open
            } else {
                content.style.maxHeight = 0;
                this.textContent = '+'; // Change to plus when closed
            }
        } else {
            console.error("Project content not found");
        }
    });
});
// Toggle button for expanding "Key Modules" content
document.querySelector('.key-toggle').addEventListener('click', function() {
    const content = document.querySelector('.key-modules-content');
    const button = this;

    // Toggle open class and adjust maxHeight
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        button.textContent = '+'; // Change to plus when closed
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        button.textContent = '−'; // Change to minus when open
    }
});
