const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Black background
ctx.fillStyle = "#111";
ctx.fillRect(0, 0, 500, 300);

// Triangle using paths
ctx.beginPath();        // start drawing
ctx.moveTo(250, 30);    // top point
ctx.lineTo(450, 270);   // bottom right
ctx.lineTo(50, 270);    // bottom left
ctx.closePath();        // connect back to start

ctx.fillStyle = "purple";
ctx.fill();
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.stroke();
