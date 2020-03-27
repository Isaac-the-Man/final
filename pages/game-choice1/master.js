const scores = [0, 0] // p1, p2
var accumulate = 0;
var turn = 0;

function refresh() {
  document.querySelector('.p-streaks').innerHTML = `Accumulated: ${accumulate}`;
  if (turn === 0) {
    // p1
    document.querySelector('.p1-title').classList.add('target');
    document.querySelector('.p2-title').classList.remove('target');
  } else {
    // p2
    document.querySelector('.p2-title').classList.add('target');
    document.querySelector('.p1-title').classList.remove('target');
  }
  // show scores
  document.querySelector('.p1-score').innerHTML = `SCORE: ${scores[0]}`;
  document.querySelector('.p2-score').innerHTML = `SCORE: ${scores[1]}`;
  // check winner
  checkWin();
}

function rollDice() {
  const rolled = Math.floor(Math.random()*6) + 1;
  document.querySelector('.dice-pic img').src = `../../images/dices/dice${rolled}.png`;
  if (rolled === 1) {
    // change player
    turn = (turn == true) ? 0 : 1;
    // transfer points
    scores[turn] += accumulate;
    accumulate = 0;
    alert(`Player ${turn + 1}'s turn`);
  } else {
    accumulate += rolled;
  }
  refresh();
}

function endDice() {
  // transfer points
  scores[turn] += accumulate;
  accumulate = 0;
  // change player
  turn = (turn == true) ? 0 : 1;
  alert(`Player ${turn + 1}'s turn`);
  refresh();
}

function checkWin() {
  scores.forEach((score, i) => {
    if (score >= 100){
      document.querySelector('.p-status').innerHTML = `p${i + 1} Wins !!!`
      alert(`Player ${i + 1} WIN !!!`);
      document.querySelector('.roll-turn').classList.add('disabled');
      document.querySelector('.end-turn').classList.add('disabled');
      document.querySelector('.roll-turn').onclick = null;
      document.querySelector('.end-turn').onclick = null;
    }
  });
}

function back() {
  window.location.replace(`../../index.html`);
}

refresh();
