document.addEventListener("DOMContentLoaded", function () {
    // Get all carousel items from the games page
    // Add in here to link to game pages
    const carouselItems = [
        {
            title: "Don't Get Wet!",
            description: "A thrilling game where you must dodge incoming rain and survive the storm!",
            link: "game1.html",
            image: "assets/dont_get_wet.png"
        },
        {
            title: "Exponential Tennis (or: Dear Lord What's Happening Now?)",
            description: "A chaotic, fast-paced tennis game where physics gets exponentially wilder!",
            link: "game2.html",
            image: "assets/exponential.png"
        },
        {
            title: "Sonder Reflections",
            description: "A reflective puzzle adventure where every decision changes the world around you.",
            link: "game3.html",
            image: "assets/sonder.png"
        }
    ];

    // Pick a random game from the carousel list
    const randomGame = carouselItems[Math.floor(Math.random() * carouselItems.length)];

    // Update the Featured Game section on the homepage
    document.getElementById("featured-game-img").src = randomGame.image;
    document.getElementById("featured-game-img").alt = randomGame.title;
    document.getElementById("featured-game-desc").innerHTML = `<strong>${randomGame.title}</strong> - ${randomGame.description}`;
    document.getElementById("featured-game-link").href = randomGame.link;
});
