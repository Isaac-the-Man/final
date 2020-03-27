// key sound mapping
const keys = [86, 66, 78, 77, 188, 190, 191];
const song = ['c3', 'd3', 'e3', 'f3', 'g3', 'a3', 'b3'];

//  Accompany
var drum1 = false;
var drum2 = false;
var drum3 = false;
var drum1Sound = new Audio('sounds/drums/hiphop.mp3')
var drum2Sound = new Audio('sounds/drums/jazz.mp3')
var drum3Sound = new Audio('sounds/drums/rock.mp3')

document.querySelector('.drum1').addEventListener('click', function() {
  if (!drum1) {
    drum1Sound.play();
    drum1 = true;
  } else {
    drum1Sound.pause();
    drum1 = false;
  }
  document.querySelector('.drum1').classList.toggle('drum-play');
});
document.querySelector('.drum2').addEventListener('click', function() {
  if (!drum2) {
    drum2Sound.play();
    drum2 = true;
  } else {
    drum2Sound.pause();
    drum2 = false;
  }
  document.querySelector('.drum2').classList.toggle('drum-play');
});
document.querySelector('.drum3').addEventListener('click', function() {
  if (!drum3) {
    drum3Sound.play();
    drum3 = true;
  } else {
    drum3Sound.pause();
    drum3 = false;
  }
  document.querySelector('.drum3').classList.toggle('drum-play');
});

document.onkeydown = function(event) {
  var i = keys.indexOf(parseInt(event.keyCode))
  if (i !== -1) {
    document.querySelector(`.${song[i]}`).classList.add('piano-key-hover');
    audio = new Audio(`sounds/piano/${song[i]}.mp3`);
    audio.play();
  }
}
document.onkeyup = function(event) {
  var i = keys.indexOf(parseInt(event.keyCode))
  if (i !== -1) {
    document.querySelector(`.${song[i]}`).classList.remove('piano-key-hover');
  }
}

function back() {
  window.location.replace(`../../index.html`);
}
