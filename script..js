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

function removeKeyColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-amber-500");
}

function getInnerTextById(elementId) {
  const getElement = document.getElementById(elementId);
  const elementText = getElement.innerText;
  const value = parseInt(elementText);
  return value;
}

function updateValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getPressKey(event) {
  const pressKeyValue = event.key;
  const getGivenValue = document.getElementById("generate_alpha");
  const givenValueText = getGivenValue.innerText;
  const givenValue = givenValueText.toLowerCase();

  if (pressKeyValue === "Escape") {
    gameOver();
  }

  if (pressKeyValue === givenValue) {
    removeKeyColor(givenValue);
    const score = getInnerTextById("score");
    const updateScore = score + 1;
    updateValue("score", updateScore);
    continueGame();
  } else {
    const life = getInnerTextById("life");
    const updateLife = life - 1;
    updateValue("life", updateLife);

    if (updateLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", getPressKey);

function continueGame() {
  let alpha = randomAlpha();
  let setAlpha = document.getElementById("generate_alpha");
  setAlpha.innerText = alpha;
  setKeyColor(alpha);
}

function play() {
  hideSection("enter_game");
  displaySection("playground");
  hideSection("score_card");
  updateValue("life", 5);
  updateValue("score", 0);
  continueGame();
}

function gameOver() {
  hideSection("playground");
  displaySection("score_card");
  const score = getInnerTextById("score");
  updateValue("final_score", score);
  const alphabet = document.getElementById("generate_alpha");
  const alphabetValue = alphabet.innerText;
  removeKeyColor(alphabetValue);
}
