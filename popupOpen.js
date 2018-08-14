const close = document.querySelectorAll(".close");
const blurLayer = document.querySelector(".blur");

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
  blurLayer.classList.add("blur--enabled");
}
function OpenFloor() {
  floor.classList.remove("hide");
  blurLayer.classList.add("blur--enabled");
}
function OpenDegree() {
  degree.classList.remove("hide");
  blurLayer.classList.add("blur--enabled");
}

function Close() {
  degree.classList.add("hide");
  floor.classList.add("hide");
  led.classList.add("hide");
  blurLayer.classList.remove("blur--enabled");
}

const handle = document.getElementById("light_handle");
const line = document.getElementById("line_light");

if (line.addEventListener) {
  if ("onwheel" in document) {
    line.addEventListener("wheel", onWheel);
  } else if ("onmousewheel" in document) {
    line.addEventListener("mousewheel", onWheel);
  } else {
    line.addEventListener("MozMousePixelScroll", onWheel);
  }
} else {
  line.attachEvent("onmousewheel", onWheel);
}


let YeX = 0;

function onWheel(e) {
  e.preventDefault();
  e = e || window.event;
  let Ye = e.deltaY;
  console.log(Ye);
  YeX = YeX + Ye;
  if (YeX >= 280) {
    YeX = 280;
  } else if (YeX <= -280) {
    YeX = -280;
  };



  handle.style.transform = `translateX(${YeX}px)`;
}
