const order = shuffle([0,1,2,3,4,5,6,7,8,9]);
const qCount = order.length;
const ans = [false, true, false, true, false, true, false, true, true, true];
var index = 0;
var score = 0;

console.log(order);

// display new questions
function newQuestion() {
  // display question
  document.querySelector(`.q${order[index] + 1}`).classList.remove('transparent');
  // change title
  document.querySelector(`.q${order[index] + 1} h1`).innerHTML = `Question ${index + 1}.`
  // display choices
  document.querySelector(`.btn-left`).classList.remove('transparent');
  document.querySelector(`.btn-right`).classList.remove('transparent');
}
// remove question
function removeQuestion() {
  // display question
  document.querySelector(`.q${order[index] + 1}`).classList.add('transparent');
  // display choices
  document.querySelector(`.btn-left`).classList.add('transparent');
  document.querySelector(`.btn-right`).classList.add('transparent');
}
// display score count
function displayScore() {
  document.querySelector('.correct').innerHTML = `Correct: ${score}`;
  document.querySelector('.wrong').innerHTML = `Wrong: ${qCount - score}`;
  document.querySelector('.scoreboard').classList.remove('transparent');
}
// remove true-false display
function next() {
  document.querySelector('.true-false-display').classList.add('transparent');
  if (index < qCount - 1) {
    index++;
    console.log(index);
    newQuestion();
  } else {
    // ending page
    displayScore();
  }
}

// check answer
function checkTrue() {
  ref = ans[order[index]];
  if (ref) {
    score++;
    document.querySelector('.true-false-display img').src = '../../images/red_circle.png';
  } else {
    document.querySelector('.true-false-display img').src = '../../images/red_cross.png';
  }
  removeQuestion();
  document.querySelector('.true-false-display').classList.remove('transparent');
}
function checkFalse() {
  ref = ans[order[index]];
  if (ref === false) {
    score++;
    document.querySelector('.true-false-display img').src = '../../images/red_circle.png';
  } else {
    document.querySelector('.true-false-display img').src = '../../images/red_cross.png';
  }
  removeQuestion();
  document.querySelector('.true-false-display').classList.remove('transparent');
}

function back() {
  window.location.replace(`../../index.html`);
}
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

newQuestion();
