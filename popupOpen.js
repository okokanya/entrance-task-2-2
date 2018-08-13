const close = document.querySelectorAll('.close');
const blurLayer = document.querySelector('.blur');

for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", Close);
}

const led_button = document.getElementById("led_button");
const XiaomiWarmFloor_button = document.getElementById("floor_button");
const degree_button = document.getElementById("degree_button");

const led = document.getElementById("led");
const floor = document.getElementById("floor");
const degree = document.getElementById("degree");

led_button.addEventListener("click", OpenLED);
floor_button.addEventListener("click", OpenFloor);
degree_button.addEventListener("click", OpenDegree);

function OpenLED() {
  led.classList.remove("hide");
  blurLayer.classList.add('blur--enabled');
}
function OpenFloor() {
  floor.classList.remove("hide");
  blurLayer.classList.add('blur--enabled');
}
function OpenDegree() {
  degree.classList.remove("hide");
  blurLayer.classList.add('blur--enabled');
}

function Close() {
  degree.classList.add("hide");
  floor.classList.add("hide");
  led.classList.add("hide");
  blurLayer.classList.remove('blur--enabled');
}
