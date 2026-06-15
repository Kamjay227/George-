// Radial gradient - makes a flat circle look 3D
const sphereGrad = ctx.createRadialGradient(
  320, 120, 5,   // inner circle (highlight) x, y, radius
  340, 140, 80   // outer circle (edge) x, y, radius
);
sphereGrad.addColorStop(0, "#ffffff");  // bright white highlight
sphereGrad.addColorStop(0.3, "#ffaa00"); // golden middle
sphereGrad.addColorStop(1, "#7a3000");   // dark edge

// Draw the circle using the gradient
ctx.beginPath();
ctx.arc(340, 140, 80, 0, Math.PI * 2);
ctx.fillStyle = sphereGrad;
ctx.fill();
