const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function draw() {
  // Sky gradient
  const sky = ctx.createLinearGradient(0, 0, 0, 300);
  sky.addColorStop(0, "#0a0a2a");   // dark blue top
  sky.addColorStop(1, "#ff6600");   // orange bottom
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, 500, 300);

  // Back hill
  ctx.beginPath();
  ctx.moveTo(0, 300);
  ctx.quadraticCurveTo(250, 180, 500, 300);
  ctx.fillStyle = "#1a3a1a";
  ctx.fill();

  // Front hill
  ctx.beginPath();
  ctx.moveTo(0, 300);
  ctx.quadraticCurveTo(150, 220, 500, 300);
  ctx.fillStyle = "#2d6a2d";
  ctx.fill();

  requestAnimationFrame(draw);
}

draw();
