const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Rectangle
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 150, 100);

// Circle
ctx.beginPath();
ctx.arc(350, 100, 60, 0, Math.PI * 2);
ctx.fillStyle = "blue";
ctx.fill();

// Line
ctx.beginPath();
ctx.moveTo(50, 250);
ctx.lineTo(450, 250);
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;
ctx.stroke();
