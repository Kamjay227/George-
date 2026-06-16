const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let sunY = 320;
let progress = 0; // 0 = night, 1 = full day

function draw() {
  ctx.clearRect(0, 0, 500, 300);

  // Sky changes from night to day
  const sky = ctx.createLinearGradient(0, 0, 0, 300);
  sky.addColorStop(0, `hsl(240, 80%, ${5 + progress * 40}%)`);
  sky.addColorStop(1, `hsl(${20 + progress * 20}, 90%, ${30 + progress * 30}%)`);
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, 500, 300);

  // Sun glow
  const glow = ctx.createRadialGradient(250, sunY, 0, 250, sunY, 100);
  glow.addColorStop(0, `rgba(255,220,50,${0.3 + progress * 0.4})`);
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
  ctx.fillStyle = `hsl(120, 40%, ${10 + progress * 15}%)`;
  ctx.fill();

  // Front hill
  ctx.beginPath();
  ctx.moveTo(0, 300);
  ctx.quadraticCurveTo(150, 220, 500, 300);
  ctx.fillStyle = `hsl(120, 50%, ${15 + progress * 20}%)`;
  ctx.fill();

  // Move sun and update progress
  if (sunY > 80) {
    sunY -= 0.5;
    progress = (320 - sunY) / 240;
  }

  requestAnimationFrame(draw);
}

draw();
