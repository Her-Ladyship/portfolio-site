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
    
    const frontIndex = Math.round((360 - (angle % 360)) / rotationAmount) % items.length;
    const title = items[frontIndex].getAttribute("data-title");
    
    gameTitle.innerText = title;
    gameTitle.style.opacity = 1;
}

positionItems();
updateGameTitle();
