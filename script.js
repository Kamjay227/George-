const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Background
ctx.fillStyle = "#111";
ctx.fillRect(0, 0, 500, 300);

// Gradient text
ctx.font = "bold 60px Arial";
const textGrad = ctx.createLinearGradient(50, 0, 450, 0);
textGrad.addColorStop(0, "#ff0000");
textGrad.addColorStop(0.5, "#ffcc00");
textGrad.addColorStop(1, "#00aaff");
ctx.fillStyle = textGrad;
ctx.fillText("GEORGE", 60, 120);

// Text with shadow effect
ctx.shadowColor = "rgba(0, 170, 255, 0.8)";
ctx.shadowBlur = 20;
ctx.fillStyle = "white";
ctx.font = "bold 35px Arial";
ctx.fillText("Web Developer", 90, 200);

// Reset shadow
ctx.shadowBlur = 0;
