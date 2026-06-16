const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Ball position and speed
let x = 50;
let y = 150;
let speedX = 3;
let speedY = 2;

function draw() {
  // 1. Clear the canvas
  ctx.clearRect(0, 0, 500, 300);

  // 2. Draw background
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, 500, 300);

  // 3. Draw ball
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = "#ff6600";
  ctx.fill();

  // 4. Move ball
  x += speedX;
  y += speedY;

  // 5. Bounce off walls
  if (x > 480 || x < 20) speedX = -speedX;
  if (y > 280 || y < 20) speedY = -speedY;

  // 6. Repeat
  requestAnimationFrame(draw);
}

// Start the animation
draw();
