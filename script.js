const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Black background
ctx.fillStyle = "#111";
ctx.fillRect(0, 0, 500, 300);

// Smooth hill using quadratic curve
ctx.beginPath();
ctx.moveTo(0, 300);          // bottom left
ctx.quadraticCurveTo(
  250, 50,                   // control point (pulls the curve)
  500, 300                   // end point bottom right
);
ctx.closePath();
ctx.fillStyle = "#2d6a2d";   // green hill
ctx.fill();

// Smooth wave line
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.quadraticCurveTo(125, 150, 250, 200);
ctx.quadraticCurveTo(375, 250, 500, 200);
ctx.strokeStyle = "#00aaff";
ctx.lineWidth = 3;
ctx.stroke();
