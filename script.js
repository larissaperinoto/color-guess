function createColorsCircle() {
  let container_colors = document.getElementById('container_colors');
  for (let circle = 0; circle < 6; circle += 1) {
      let circleColors = document.createElement('div');
      circleColors.className = 'ball';
      container_colors.appendChild(circleColors);
  }
}

createColorsCircle();

function generateColors() {
  let circleColor = document.querySelectorAll('div');
  for (let ball of circleColor) {
    ball.style.backgroundColor = generateRGB();
  }
}

generateColors();

function generateRGB() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let arrayRGB = [r, g, b];
  let rgb = 'rgb' + '(' + arrayRGB.join(',') + ')';
  return rgb;
}

function generateColorText() {
  let textColorParagraph = document.getElementById('rgb-color');
  let circleColor = document.querySelectorAll('div');
  let chooseCircle = circleColor[Math.floor(Math.random() * 6)].style.backgroundColor;
  let arrayParagraphColor = chooseCircle.split('').slice(3.16).join('');
  textColorParagraph.innerText = arrayParagraphColor;
}

generateColorText();
createPlacar();

function answerText() {
  let answerParagraph = document.getElementById('answer');
  answerParagraph.innerText = "Escolha uma cor";

  let circleColor = document.querySelectorAll('div');
  let textColor = document.getElementById('rgb-color');
  let placar = document.getElementById('score');
  let score = parseInt(placar.innerText);

  for (let color of circleColor) {
    color.addEventListener('click', function() {
      if (color.style.backgroundColor === ('rgb' + textColor.innerText)) {
        answerParagraph.innerText = "Acertou!";
        score += 3;
        placar.innerText = score;
      } else {
        answerParagraph.innerText = "Errou! Tente novamente!";
      }
    });
  }
}

answerText();

function createResetButton() {
  let container_button_reset = document.getElementById('container_button_reset');
  let buttonReset = document.createElement('button');
  buttonReset.id = 'reset-game';
  buttonReset.innerText = 'Start';
  container_button_reset.appendChild(buttonReset);
}

createResetButton();

function restartGame() {
  let buttonRestart = document.getElementById('reset-game');
  buttonRestart.addEventListener('click', function(){
    generateColors();
    generateColorText();
    answerText();
  });
}

restartGame();

function createPlacar() {
  let container_placar = document.getElementById('container_placar');
  let placar = document.createElement('span');
  placar.id = 'score';
  placar.innerText = '0';
  container_placar.appendChild(placar);
}
