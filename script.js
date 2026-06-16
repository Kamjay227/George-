const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Sky background
ctx.fillStyle = "#111";
ctx.fillRect(0, 0, 500, 300);

// Bezier curve - like drawing with a pen tool
ctx.beginPath();
ctx.moveTo(50, 250);           // start point
ctx.bezierCurveTo(
  100, 50,                     // control point 1
  400, 50,                     // control point 2
  450, 250                     // end point
);
ctx.strokeStyle = "#ff6600";
ctx.lineWidth = 4;
ctx.stroke();

// A heart shape using bezier curves
ctx.beginPath();
ctx.moveTo(250, 200);
ctx.bezierCurveTo(250, 170, 210, 150, 210, 175);
ctx.bezierCurveTo(210, 150, 170, 155, 170, 175);
ctx.bezierCurveTo(170, 200, 210, 220, 250, 250);
ctx.bezierCurveTo(290, 220, 330, 200, 330, 175);
ctx.bezierCurveTo(330, 155, 290, 150, 290, 175);
ctx.bezierCurveTo(290, 150, 250, 170, 250, 200);
ctx.fillStyle = "red";
ctx.fill();
