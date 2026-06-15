const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Create a gradient from top to bottom
const skyGrad = ctx.createLinearGradient(0, 0, 0, 300);
skyGrad.addColorStop(0, "#00003a");   // dark blue at top
skyGrad.addColorStop(0.6, "#e05a00"); // orange in middle
skyGrad.addColorStop(1, "#ffcc00");   // yellow at bottom

// Fill the whole canvas with it
ctx.fillStyle = skyGrad;
ctx.fillRect(0, 0, 500, 300);
