let restMinute = 2;
let workMinute = 10;
let second = 60;

let restTime = document.getElementById("rest-time");
let workTime = document.getElementById("work-time");

//run timer here!
document.getElementById("start").addEventListener('click', (e) => {
  e.preventDefault(); 
  runCountDown();
  // stop();
});

//stop the timer logic here!

// function stop(){
//   let stopTime = stopTimer();
//   document.getElementById('start').textContent = "Stop";
//   if(document.getElementById("start").click()){
//     return stopTime;
//   }
// }

const radioButtons = document.querySelectorAll('form');

radioButtons.forEach(function(radioButton){
  document.getElementById('break').style.display = 'none';
  radioButton.addEventListener('click', () => {
    if(document.getElementById('work').checked){
      document.getElementById('work-min').style.display = 'block';
      document.getElementById('break').style.display = 'none';
      // console.log('successful');
    }
    else{
      document.getElementById('break').style.display = 'block';
      document.getElementById('work-min').style.display = 'none';
      // console.log('this also ran successfully');
    }
  });
});

function restCountDown() {
  if (second > 10) {
    second--;
    restTime.innerHTML = `0${restMinute}:${second}`;
    console.log(restTime.innerHTML);
  } else if (second > 0 && second <= 10) {
    second--;
    restTime.innerHTML = `0${restMinute}:0${second}`;
    console.log(restTime.innerHTML);
  } else if (second === 0 && restMinute > 0) {
    restMinute--;
    second = 59;
    restTime.innerHTML = `0${restMinute}:${second}`;
    console.log(restTime.innerHTML);
  }
}

function workCountDown() {
  if (second > 10) {
    second--;
    workTime.innerHTML = `${workMinute}:${second}`;
    // console.log(workTime.innerHTML);
    if (workMinute < 10) {
      workTime.innerHTML = `0${workMinute}:${second}`;
      console.log(workTime.innerHTML);
    }
  } else if (second > 0 && second <= 10) {
    second--;
    workTime.innerHTML = `${workMinute}:0${second}`;
    // console.log(workTime.innerHTML);
    if (workMinute < 10) {
      workTime.innerHTML = `0${workMinute}:0${second}`;
      console.log(workTime.innerHTML);
    }
  } else if (second === 0 && workMinute > 0) {
    workMinute--;
    second = 59;
    workTime.innerHTML = `${workMinute}:${second}`;
    // console.log(workTime.innerHTML);
    if (workMinute < 10) {
      workTime.innerHTML = `0${workMinute}:${second}`;
      console.log(workTime.innerHTML);
    }
  }
}

function runCountDown() {
  let workTimer = setInterval(workCountDown, 1000);
  let restTimer = setInterval(restCountDown, 1000);
  return (document.getElementById('work').checked) ? workTimer : restTimer;
}

// function stopTimer() {
//   let myTimer = runCountDown();
//  return clearInterval(myTimer);
// }