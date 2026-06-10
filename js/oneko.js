(function () {

const neko = document.createElement("div");

let mouseX = 0;
let mouseY = 0;

let nekoX = 32;
let nekoY = 32;

const speed = 10;

const sprite = {
idle: [[-3, -3]],
N: [[-1, -2]],
NE: [[0, -2]],
E: [[-3, 0]],
SE: [[-5, -1]],
S: [[-6, -3]],
SW: [[-5, -3]],
W: [[-4, -2]],
NW: [[-1, 0]]
};

function setSprite(dir, frame = 0) {
const s = sprite[dir] || sprite.idle;
const p = s[frame % s.length];
neko.style.backgroundPosition =
`${p[0] * 32}px ${p[1] * 32}px`;
}

let frame = 0;

function loop() {
frame++;

const dx = nekoX - mouseX;
const dy = nekoY - mouseY;
const dist = Math.sqrt(dx * dx + dy * dy);

if (dist > speed) {

let dir = "";
dir += dy / dist > 0.5 ? "N" : "";
dir += dy / dist < -0.5 ? "S" : "";
dir += dx / dist > 0.5 ? "W" : "";
dir += dx / dist < -0.5 ? "E" : "";

setSprite(dir || "idle", frame);

nekoX -= (dx / dist) * speed;
nekoY -= (dy / dist) * speed;

neko.style.left = nekoX + "px";
neko.style.top = nekoY + "px";
}

requestAnimationFrame(loop);
}

function init() {

let img = document.currentScript.dataset.cat;

neko.id = "oneko";
neko.style.backgroundImage = `url(${img})`;

document.body.appendChild(neko);

document.addEventListener("mousemove", (e) => {
mouseX = e.clientX;
mouseY = e.clientY;
});

requestAnimationFrame(loop);
}

init();

})();
