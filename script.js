let restSecond = 60;
let workSecond = 60;
let workMinute = 25;
let restMinute = 5;

let workInterval;
let restInterval;

let workTime = document.getElementById('work-time');
let restTime = document.getElementById('rest-time');

const radioButtons = document.querySelectorAll('form');
let startButton = false;

document.getElementById("start").addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.textContent === 'Start') {
    document.getElementById('work').checked ? runWorkTimer() : runRestTimer();
  }
  else {
    stopInterval();
  }
  changeTextOfStartButton();
  disableHtmlOnClickedStartButton();
});

document.getElementById("reset").addEventListener('click', (e) => {
  e.preventDefault();
  resetTimer();
});

function runWorkTimer() {
  workInterval = setInterval(displayWorkTime, 1000);
  return workInterval;
}

function runRestTimer() {
  restInterval = setInterval(displayRestTime, 1000);
  return restInterval;
}

function stopInterval() {
  if (document.getElementById('work').checked) {
    clearInterval(workInterval);
  }
  else {
    clearInterval(restInterval);
  }
}

function changeTextOfStartButton() {
  if (!startButton) {
    document.getElementById('start').textContent = 'Stop';
    startButton = true;
  }
  else {
    document.getElementById('start').textContent = 'Start';
    startButton = false;
  }
}

function disableHtmlOnClickedStartButton() {
  if (startButton) {
    document.getElementById('rest').disabled = true;
    document.getElementById('work').disabled = true;
    document.getElementById('reset').disabled = true;
  }
  else {
    document.getElementById('rest').disabled = false;
    document.getElementById('work').disabled = false;
    document.getElementById('reset').disabled = false;
  }
}

function resetTimer() {
  if (document.getElementById('work').checked) {
    workMinute = 25;
    workSecond = 0;
    workTime.textContent = `${workMinute}:0${workSecond}`;
    return workTime;
  }
  else {
    restMinute = 5;
    restSecond = 0
    restTime.textContent = `0${restMinute}:0${restSecond}`;
    return restTime;
  }
}

function displayWorkTime() {
  let workMinuteCount = workCountDown();
  let workSecondCount = workSecondCountDown();
  workTime.textContent = `${workMinuteCount}:${workSecondCount}`;
  return workTime;
}

function displayRestTime() {
  let restMinuteCount = restMinuteCountDown();
  let restSecondCount = restSecondCountDown();
  restTime.textContent = `${restMinuteCount}:${restSecondCount}`;
  return restTime;
}

function workCountDown() {
  if (workSecond === 0 && workMinute > 0) {
    workMinute--;
    workSecond = 60;
    if ((minute >= 0 && workMinute < 10)) {
      return `0${workMinute}`;
    }
  }
  else if ((workMinute >= 0 && workMinute < 10)) {
    return `0${workMinute}`;
  }
  else {
    `${workMinute}`;
  }
  return workMinute;
}

function workSecondCountDown() {
  if (workSecond > 10 && workSecond <= 60) {
    workSecond--;
    return workSecond;
  }
  else if (workSecond > 0 && workSecond <= 10) {
    workSecond--;
    return `0${workSecond}`;
  }
  else if (workSecond === 0 && minute === 0) {
    return;
  }
  else {
    return `00`;
  }
}

function restMinuteCountDown() {
  if (restSecond === 0 && restMinute > 0) {
    restMinute--;
    restSecond = 60;
    `${restMinute}`;
  }
  else {
    `${restMinute}`;
  }
  return `0${restMinute}`;
}

function restSecondCountDown() {
  if (restSecond > 10 && restSecond <= 60) {
    restSecond--;
    return restSecond;
  }
  else if ((restSecond > 0 && restSecond <= 10)) {
    restSecond--;
    return `0${restSecond}`;
  }
  else if (restSecond === 0 && minute === 0) {
    return;
  }
  else {
    return `00`;
  }
}

radioButtons.forEach(function (radioButton) {
  restTime.style.display = 'none';
  radioButton.addEventListener('click', () => {
    if (document.getElementById('work').checked) {
      workTime.style.display = 'block';
      restTime.style.display = 'none';
    }
    else {
      restTime.style.display = 'block';
      workTime.style.display = 'none';
    }
  });
});




























