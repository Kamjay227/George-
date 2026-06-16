const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Sky
const sky = ctx.createLinearGradient(0, 0, 0, 300);
sky.addColorStop(0, "#87ceeb");   // light blue top
sky.addColorStop(1, "#e0f4ff");   // pale blue bottom
ctx.fillStyle = sky;
ctx.fillRect(0, 0, 500, 300);

// Ground
ctx.fillStyle = "#4a8c3f";
ctx.fillRect(0, 230, 500, 70);
// Sun
const sunGrad = ctx.createRadialGradient(80, 70, 5, 80, 70, 40);
sunGrad.addColorStop(0, "#ffffff");
sunGrad.addColorStop(0.4, "#ffee00");
sunGrad.addColorStop(1, "#ffaa00");
ctx.beginPath();
ctx.arc(80, 70, 40, 0, Math.PI * 2);
ctx.fillStyle = sunGrad;
ctx.fill();

// Sun glow
const glow = ctx.createRadialGradient(80, 70, 0, 80, 70, 80);
glow.addColorStop(0, "rgba(255,220,50,0.3)");
glow.addColorStop(1, "rgba(255,220,50,0)");
ctx.fillStyle = glow;
ctx.beginPath();
ctx.arc(80, 70, 80, 0, Math.PI * 2);
ctx.fill();
