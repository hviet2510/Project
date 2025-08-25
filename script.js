const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];

// tạo mưa
for (let i = 0; i < 600; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10, // độ dài giọt
    speed: Math.random() * 5 + 4,    // tốc độ rơi
    opacity: Math.random() * 0.2 + 0.3
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "rgba(174,194,224,0.5)";
  ctx.lineWidth = 1;

  for (let i = 0; i < drops.length; i++) {
    const d = drops[i];
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y + d.length);
    ctx.stroke();
  }
}

function updateRain() {
  for (let i = 0; i < drops.length; i++) {
    const d = drops[i];
    d.y += d.speed;
    if (d.y > canvas.height) {
      d.y = -20; // reset lên trên
      d.x = Math.random() * canvas.width;
    }
  }
}

function animate() {
  drawRain();
  updateRain();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
