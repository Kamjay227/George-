setInterval(() => {
    let box = document.querySelector(".blue-square");

    box.style.transform = 
        box.style.transform === "translateX(200px)"
        ? "translateX(0px)"
        : "translateX(200px)";
}, 1000);
