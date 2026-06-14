let x = 0;
let x2 = 200;
let y = 0;
let y2 = 150;
let dirX = 1;
let dirX2 = -1;
let dirY = 1;
let dirY2 = -1;
let hue = 0;
let hue2 = 180;

function moveBox() {
  x += 2 * dirX;
  x2 += 2 * dirX2;
  y += 2 * dirY;
  y2 += 2 * dirY2;

  if (x > 400 || x < 0) dirX *= -1;
  if (x2 > 400 || x2 < 0) dirX2 *= -1;
  if (y > 300 || y < 0) dirY *= -1;
  if (y2 > 300 || y2 < 0) dirY2 *= -1;

  hue += 2;
  hue2 += 2;
  if (hue > 360) hue = 0;
  if (hue2 > 360) hue2 = 0;

  const box = document.getElementById("box");
  const box2 = document.getElementById("box2");

  box.style.left = x + "px";
  box.style.top = y + "px";
  box.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)";

  box2.style.left = x2 + "px";
  box2.style.top = y2 + "px";
  box2.style.backgroundColor = "hsl(" + hue2 + ", 100%, 50%)";

  requestAnimationFrame(moveBox);
}

moveBox();
let running = true;

function toggleMove() {
  running = !running;
  document.getElementById("btn").textContent = running ? "Stop" : "Start";
  if (running) moveBox();
}
