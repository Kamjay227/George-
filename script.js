const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let sunY = 320;  // sun starts below canvas

function draw() {
  ctx.clearRect(0, 0, 500, 300);

  // Sky - changes as sun rises
  const sky = ctx.createLinearGradient(0, 0, 0, 300);
  sky.addColorStop(0, "#0a0a2a");
  sky.addColorStop(1, "#ff6600");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, 500, 300);

  // Sun glow
  const glow = ctx.createRadialGradient(250, sunY, 0, 250, sunY, 80);
  glow.addColorStop(0, "rgba(255,220,50,0.6)");
  glow.addColorStop(1, "rgba(255,100,0,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 500, 300);

  // Sun
  const sunGrad = ctx.createRadialGradient(240, sunY-10, 5, 250, sunY, 35);
  sunGrad.addColorStop(0, "#ffffff");
  sunGrad.addColorStop(0.4, "#ffee00");
  sunGrad.addColorStop(1, "#ff6600");
  ctx.beginPath();
  ctx.arc(250, sunY, 35, 0, Math.PI * 2);
  ctx.fillStyle = sunGrad;
  ctx.fill();

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

  // Move sun up, stop at y=80
  if (sunY > 80) sunY -= 0.5;

  requestAnimationFrame(draw);
}

draw();
