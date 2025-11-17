let items = document.querySelectorAll(".box").length;
for (let i = 0; i < items; i++) {
  // play sound animation
  document
    .querySelectorAll(".box")
    [i].addEventListener("click", function () {});
}
document.addEventListener("keypress", function () {
    makeSound(event.key)
});
function makeSound(key) {
  switch (key) {
    case "d":
      let m1 = new Audio("../sounds/tom-1.mp3");
      m1.play();
      break;
    case "f":
      let m2 = new Audio("../sounds/tom-2.mp3");
      m2.play();
      break;
    case "g":
      let m3 = new Audio("../sounds/tom-3.mp3");
      m3.play();
      break;
    case "h":
      let m4 = new Audio("../sounds/tom-4.mp3");
      m4.play();
      break;
    case "i":
      let m5 = new Audio("../sounds/snare.mp3");
      m5.play();
      break;
    case "j":
      let m6 = new Audio("../sounds/kick-bass.mp3");
      m6.play();
      break;
    case "k":
      let m7 = new Audio("../sounds/crash.mp3");
      m7.play();
      break;
  }
}