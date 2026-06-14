let x = 0;
let direction = 1;

function moveBox() {
  x += 3 * direction;
  if (x > 500 || x < 0) direction *= -1;
  document.getElementById("box").style.left = x + "px";
  requestAnimationFrame(moveBox);
}

moveBox();
