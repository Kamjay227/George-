const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Sky gradient - top to bottom
const skyGrad = ctx.createLinearGradient(0, 0, 0, 300);
skyGrad.addColorStop(0, "#00003a");
skyGrad.addColorStop(0.6, "#e05a00");
skyGrad.addColorStop(1, "#ffcc00");
ctx.fillStyle = skyGrad;
ctx.fillRect(0, 0, 500, 300);

// Sun - radial gradient for 3D look
const sphereGrad = ctx.createRadialGradient(
  320, 120, 5,
  340, 140, 80
);
sphereGrad.addColorStop(0, "#ffffff");
sphereGrad.addColorStop(0.3, "#ffaa00");
sphereGrad.addColorStop(1, "#7a3000");
ctx.beginPath();
ctx.arc(340, 140, 80, 0, Math.PI * 2);
ctx.fillStyle = sphereGrad;
ctx.fill();
