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
