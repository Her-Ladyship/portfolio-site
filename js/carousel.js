let angle = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
const rotationAmount = 360 / totalItems;

function positionItems() {
    items.forEach((item, index) => {
        const rotation = index * rotationAmount;
        item.style.transform = `translate(-50%, -50%) rotateY(${rotation}deg) translateZ(300px)`;
    });
}

function rotateCarousel(direction) {
    angle += direction * rotationAmount;
    document.querySelector(".carousel-wrapper").style.transform = `rotateY(${angle}deg)`;
    updateGameTitle();
}

function updateGameTitle() {
    const items = document.querySelectorAll(".carousel-item");
    const gameTitle = document.getElementById("game-title");
    
    // Calculate the current front-facing index
    const frontIndex = Math.round((360 - (angle % 360)) / rotationAmount) % items.length;
    
    // Get the game title from the data attribute
    const title = items[frontIndex].getAttribute("data-title");
    
    // Update the game title text
    gameTitle.innerText = title;
    gameTitle.style.opacity = 1; // Fade in
}

// Position items initially
positionItems();
updateGameTitle(); // Ensure the first game's title is shown on load
