let x = 0;
let direction = 1;
let hue = 0;

function moveBox() {
  x += 2 * direction;
  if (x > 500 || x < 0) direction *= -1;

  hue += 2;
  if (hue > 360) hue = 0;

  const box = document.getElementById("box");
  box.style.left = x + "px";
  box.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";

  requestAnimationFrame(moveBox);
}

moveBox();
