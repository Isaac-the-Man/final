const games = ['.game-choice1', '.game-choice2', '.game-choice3', '.game-choice4'];
var gameIndex = 0;

function popup() {
  document.querySelector('.popup-container').classList.remove('transparent');
}
function closePopup() {
  document.querySelector('.popup-container').classList.add('transparent');
}
function openGame() {
  window.location.replace(`./pages/game-choice${gameIndex + 1}/index.html`);
}
function nextGame() {
  document.querySelector(games[gameIndex]).classList.remove('target');
  document.querySelector(games[gameIndex]).classList.add('transparent');
  gameIndex++;
  if (gameIndex >= games.length) {
    gameIndex = 0;
  }
  document.querySelector(games[gameIndex]).classList.remove('transparent');
  document.querySelector(games[gameIndex]).classList.add('target');
}
function prevGame() {
  document.querySelector(games[gameIndex]).classList.remove('target');
  document.querySelector(games[gameIndex]).classList.add('transparent');
  gameIndex--;
  if (gameIndex < 0) {
    gameIndex = games.length - 1;
  }
  document.querySelector(games[gameIndex]).classList.remove('transparent');
  document.querySelector(games[gameIndex]).classList.add('target');
}
