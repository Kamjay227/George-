let box = document.querySelector(".blue-square");

let position = 0;
let direction = 1; // 1 = right, -1 = left
let speed = 2;

setInterval(() => {
    position = position + (speed * direction);

    // when it reaches right edge → go left
    if (position >= 300) {
        direction = -1;
    }

    // when it reaches left edge → go right
    if (position <= 0) {
        direction = 1;
    }

    box.style.transform = `translateX(${position}px)`;
}, 20);
