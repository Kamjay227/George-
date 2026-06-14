let box = document.querySelector(".blue-square");

let position = 0;
let direction = 2; // speed and direction

setInterval(() => {
    position += direction;

    // reverse direction when it hits edges
    if (position >= 300 || position <= 0) {
        direction = -direction;
    }

    box.style.transform = `translateX(${position}px)`;
}, 20);
