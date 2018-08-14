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

  const handle = document.getElementById("handle_light");
  const line = document.getElementById("line_light");
  let width = line.offsetWidth;
  let block = width / 2 - 32;

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

  let yex = 0;
  function onWheel(e) {
    e = e || window.event;
    let ye = Number(e.deltaY);
    console.log(ye);
    if (ye) yex = yex + ye;
    if (yex >= block) {
      yex = block;
    } else if (yex <= -block) {
      yex = -block;
    }
    handle.style.transform = `translateX(${yex}px)`;
  }
  onWheel();

  blurLayer.classList.add("blur--enabled");
}

function OpenFloor() {
  floor.classList.remove("hide");

  const scale = document.getElementById("scale");
  const rotate_1 = document.getElementById("rotate_1");
  const rotate_2 = document.getElementById("rotate_2");



  if (scale.addEventListener) {
    if ("onwheel" in document) {
      scale.addEventListener("wheel", onWheel);
    } else if ("onmousewheel" in document) {
      scale.addEventListener("mousewheel", onWheel);
    } else {
      scale.addEventListener("MozMousePixelScroll", onWheel);
    }
  } else {
    scale.attachEvent("onmousewheel", onWheel);
  }

  let yex = 0;
  function onWheel(e) {
    e = e || window.event;
    let ye = Number(e.deltaY);
    console.log(ye);
    if (ye) yex = yex + ye;
    // yex = yex + ye;
    console.log(yex);

    rotate_1.style.transform = `rotate(${yex}deg)`;
    rotate_2.style.transform = `rotate(${Math.max(180, yex)})`;

  }
  onWheel();

  blurLayer.classList.add("blur--enabled");
}

function OpenDegree() {
  degree.classList.remove("hide");

  const handle = document.getElementById("handle_temp");
  const line = document.getElementById("line_temp");
  let width = line.offsetWidth;
  let block = width / 2 - 32;

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

  let yex = 0;
  function onWheel(e) {
    e = e || window.event;
    let ye = Number(e.deltaY);
    console.log(ye);
    if (ye) yex = yex + ye;
    if (yex >= block) {
      yex = block;
    } else if (yex <= -block) {
      yex = -block;
    }
    handle.style.transform = `translateX(${yex}px)`;
  }
  onWheel();

  blurLayer.classList.add("blur--enabled");
}

function Close() {
  degree.classList.add("hide");
  floor.classList.add("hide");
  led.classList.add("hide");
  blurLayer.classList.remove("blur--enabled");
}
