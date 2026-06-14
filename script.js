window.onload = function () {
    let box = document.querySelector(".blue-square");

    let position = 0;
    let speed = 2;

    setInterval(() => {
        position = position + speed;

        if (position >= 300 || position <= 0) {
            speed = speed * -1;
        }

        box.style.left = position + "px";
    }, 20);
};
