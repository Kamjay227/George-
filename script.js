let x = 0;
let x2 = 200;
let direction = 1;
let direction2 = -1;
let hue = 0;
let hue2 = 180;

function moveBox() {
  x += 2 * direction;
  x2 += 2 * direction2;

  if (x > 400 || x < 0) direction *= -1;
  if (x2 > 400 || x2 < 0) direction2 *= -1;

  hue += 2;
  hue2 += 2;
  if (hue > 360) hue = 0;
  if (hue2 > 360) hue2 = 0;

  const box = document.getElementById("box");
  const box2 = document.getElementById("box2");

  box.style.left = x + "px";
  box.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";

  box2.style.left = x2 + "px";
  box2.style.backgroundColor = "hsl(" + hue2 + ", 100%, 50%)";

  requestAnimationFrame(moveBox);
}

moveBox();
