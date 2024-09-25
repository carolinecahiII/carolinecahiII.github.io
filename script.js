let zIndexCounter = 2; // Start counter higher than default z-index

window.onload = function() {
    initializeCards();
}

function initializeCards() {
    let cards = document.querySelectorAll('.card');
    let container = document.querySelector('.card-container');
    let containerRect = container.getBoundingClientRect();

    // Array of colors for Palette 1
    let colors = ['#B7D9FE', '#D1C45F', '#6B2137', '#FB4D16'];

    // Shuffle the colors array
    shuffleArray(colors);

    cards.forEach((card, index) => {
        // Assign a random color from the shuffled array
        card.style.backgroundColor = colors[index % colors.length];

        // Calculate the random position within the container boundaries
        if (window.innerWidth > 768) {
            let randomX = Math.floor(Math.random() * (containerRect.width - card.clientWidth));
            let randomY = Math.floor(Math.random() * (containerRect.height - card.clientHeight));
            card.style.top = `${randomY}px`;
            card.style.left = `${randomX}px`;

            // Randomize rotation
            let randomRotation = Math.floor(Math.random() * 30 - 15); // Random degree between -15 and 15
            card.style.transform = `translate(0, 0) rotate(${randomRotation}deg)`;

            // Enable dragging
            dragElement(card);
        } else {
            card.style.top = 'auto';
            card.style.left = 'auto';
            card.style.transform = 'none';
        }
    });
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to enable dragging
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Bring card to the front
        elmnt.style.zIndex = zIndexCounter++;
        // Get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the element's new position
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function setOriginalScheme() {
    // Set Palette 1 as the original scheme
    document.body.classList.remove('new-scheme-active');
    document.body.style.backgroundColor = '#F6E7D3';
    document.querySelector('.frame').style.backgroundColor = '#F6E7D3';

    let cards = document.querySelectorAll('.card');
    let colors = ['#B7D9FE', '#D1C45F', '#6B2137', '#FB4D16'];

    cards.forEach((card, index) => {
        card.style.backgroundColor = colors[index % colors.length];
    });

    // Set text color in sidebar
    document.querySelector('.sidebar').style.color = '#6B2137';
}

function setPalette2() {
    // Set Palette 2
    document.body.classList.add('new-scheme-active');
    document.body.style.backgroundColor = '#f2d9bb';
    document.querySelector('.frame').style.backgroundColor = '#f2d9bb';

    let cards = document.querySelectorAll('.card');
    let colors = ['#4e49a5', '#eaac2f', '#89892b', '#536122'];

    cards.forEach((card, index) => {
        card.style.backgroundColor = colors[index % colors.length];
    });

    // Set text color in sidebar
    document.querySelector('.sidebar').style.color = '#4e49a5';
}

function setPalette3() {
    // Set Palette 3 (Black and White)
    document.body.classList.add('new-scheme-active');
    document.body.style.backgroundColor = '#000000';
    document.querySelector('.frame').style.backgroundColor = '#FFFFFF';

    let cards = document.querySelectorAll('.card');
    let colors = ['#000000', '#FFFFFF', '#000000', '#FFFFFF'];

    cards.forEach((card, index) => {
        card.style.backgroundColor = colors[index % colors.length];
    });

    // Set text color in sidebar
    document.querySelector('.sidebar').style.color = '#000000';
}

function setPalette4() {
    // Set Palette 4
    document.body.classList.add('new-scheme-active');
    document.body.style.backgroundColor = '#f69f3';
    document.querySelector('.frame').style.backgroundColor = '#f69f3';

    let cards = document.querySelectorAll('.card');
    let colors = ['#32572b', '#83d196', '#ffb1ce', '#ff5b20'];

    cards.forEach((card, index) => {
        card.style.backgroundColor = colors[index % colors.length];
    });

    // Set text color in sidebar
    document.querySelector('.sidebar').style.color = '#ffdf0';
}

function setPalette5() {
    // Set Palette 5
    document.body.classList.add('new-scheme-active');
    document.body.style.backgroundColor = '#FCA289';
    document.querySelector('.frame').style.backgroundColor = '#FCA289';

    let cards = document.querySelectorAll('.card');
    let colors = ['#E86901', '#FF8D02', '#B09FCA', '#775496', '#EEC4BE'];

    cards.forEach((card, index) => {
        card.style.backgroundColor = colors[index % colors.length];
    });

    // Set text color in sidebar
    document.querySelector('.sidebar').style.color = '#EEC4BE';
}

function handleCardClick(event, popupId) {
    event.stopPropagation(); // Prevent triggering card drag
    showPopup(popupId);
}

function showPopup(id) {
    let popup = document.getElementById(id);
    popup.style.zIndex = zIndexCounter++; // Ensure the popup is always on top
    popup.style.display = "block";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

function bringToFront(card) {
    card.style.zIndex = zIndexCounter++;
}
