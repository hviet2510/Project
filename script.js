// tạo tuyết rơi
function createSnow() {
  const snow = document.createElement("div");
  snow.className = "snow";
  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.animationDuration = 2 + Math.random() * 3 + "s";
  snow.style.opacity = Math.random();
  snow.style.transform = `scale(${Math.random()})`;
  document.body.appendChild(snow);
  setTimeout(() => snow.remove(), 5000);
}
setInterval(createSnow, 150);
