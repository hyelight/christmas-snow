function createSnow() {
  const snowing = document.createElement("div");
  snowing.classList.add("snow");
  snowing.style.marginLeft = randomSnow() + "px";
  document.body.appendChild(snowing);
}
function randomSnow() {
  return Math.floor(Math.random() * window.innerWidth);
}
for (let i = 0; i < 1000; i++) {
  createSnow();
}
