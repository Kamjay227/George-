let box = document.querySelector(".blue-square");

let position = 0;
let speed = 2;

setInterval(() => {
    position += speed;

    if (position > 300 || position < 0) {
        speed = -speed;
    }

    box.style.left = position + "px";
}, 20);
