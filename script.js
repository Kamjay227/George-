let box = document.querySelector(".blue-square");

let position = 0;
let speed = 2;

setInterval(() => {
    position += speed;

    // screen limit (IMPORTANT)
    if (position > 300) {
        speed = -2; // go left
    }

    if (position < 0) {
        speed = 2; // go right
    }

    box.style.transform = `translateX(${position}px)`;
}, 20);
