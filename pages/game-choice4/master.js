const normList = [];
const urgeList = [];


function _newTask(list, name) {
  list.push(name);
}

function submit() {
  const radios = document.getElementsByName('type');
  var isFilled = false;
  radios.forEach((item, i) => {
    if (item.checked) {
      isFilled = true;
    }
  });
  const myName = document.querySelector('.name').value
  if (myName === '') {
    isFilled = false;
  }
  if (!isFilled) {
    alert('One or more fields missing.');
    return;
  }
  if (radios[0].checked) {
    _newTask(normList, myName);
  } else {
    _newTask(urgeList, myName);
  }
  discard();
  refresh();
}

function popup() {
  document.querySelector('.create-panel').classList.remove('transparent');
}

function discard() {
  document.querySelector('.create-panel').classList.add('transparent');
  const radios = document.getElementsByName('type');
  radios.forEach((item, i) => {
    if (item.checked) {
      radios[i].checked = false;
    }
  });
  const myName = document.querySelector('.name').value = '';
}

function doneNorm() {
  normList.pop();
  refresh();
}

function doneUrge() {
  urgeList.pop()
  refresh();
}

function _displayList(list, query) {
  document.querySelector(`${query} ul`).innerHTML = '';
  list.forEach((item, i) => {
    document.querySelector(`${query} ul`).innerHTML += `<li>${item}</li>`;
  });
}

function _suchEmpty(list, query) {
  if (list.length === 0) {
    document.querySelector(`${query} ul`).innerHTML = '<i>Wow, Such Empty.</i>'
  }
}

function refresh() {
  _displayList(normList, '.list-normal');
  _displayList(urgeList, '.list-urgent');
  _suchEmpty(normList, '.list-normal');
  _suchEmpty(urgeList, '.list-urgent');
}

function back() {
  window.location.replace(`../../index.html`);
}

refresh();
