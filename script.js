const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 50;
let y = 150;
let speedX = 4;
let speedY = 3;

function draw() {
  // Semi-transparent clear = creates trail effect
  ctx.fillStyle = "rgba(17, 17, 17, 0.2)";
  ctx.fillRect(0, 0, 500, 300);

  // Glowing ball
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = "#ff6600";
  ctx.shadowColor = "#ff6600";
  ctx.shadowBlur = 20;
  ctx.fill();
  ctx.shadowBlur = 0;

  x += speedX;
  y += speedY;

  if (x > 480 || x < 20) speedX = -speedX;
  if (y > 280 || y < 20) speedY = -speedY;

  requestAnimationFrame(draw);
}

draw();
