function hideSection(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function displaySection(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function randomAlpha() {
  const alplabetString = "abcdefghijklmnopqrstuvwxyz";
  let alphabets = alplabetString.split("");
  let index = Math.round(Math.random() * 25);
  let alphabet = alphabets[index];
  return alphabet;
}

function setKeyColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-amber-500");
}

function play() {
  hideSection("enter_game");
  displaySection("playground");
  let alpha = randomAlpha();
  let setAlpha = document.getElementById("generate_alpha");
  setAlpha.innerText = alpha;
  setKeyColor(alpha);
}
