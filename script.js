const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Background
ctx.fillStyle = "#111";
ctx.fillRect(0, 0, 500, 300);

// Basic text
ctx.fillStyle = "white";
ctx.font = "40px Arial";
ctx.fillText("Hello Canvas!", 80, 80);

// Colored text
ctx.fillStyle = "#ffcc00";
ctx.font = "bold 30px Arial";
ctx.fillText("George Kamjay", 120, 150);

// Outlined text (no fill)
ctx.strokeStyle = "#00aaff";
ctx.lineWidth = 1;
ctx.font = "italic 25px Arial";
ctx.strokeText("Web Developer", 140, 220);
