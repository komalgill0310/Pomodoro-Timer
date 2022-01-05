let restSecond = 60;
let workSecond = 60;
let minute = 25;
let restMinute = 5;

let workInterval;
let restInterval;

let workTime = document.getElementById('work-time');
let restTime = document.getElementById('rest-time');

const radioButtons = document.querySelectorAll('form');
let start = false;//button is not clicked

document.getElementById("start").addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.textContent === 'Start') {
    document.getElementById('work').checked ? runWorkTimer() : runRestTimer();
  }
  else {
    stopInterval();
  }
  changeTextOfStartButton();
  disableRestHtml();
});

document.getElementById("reset").addEventListener('click', (e) => {
  e.preventDefault();
  resetTimer();
});

function runWorkTimer() {
  workInterval = setInterval(displayWorkTime, 1000);
  return workInterval;
}

function displayWorkTime() {
  let workMinute = workCountDown();
  let workSecondTime = workSecondCountDown();
  workTime.textContent = `${workMinute}:${workSecondTime}`;
  return workTime;
}

function runRestTimer() {
  restInterval = setInterval(displayRestTime, 1000);
  return restInterval;
}

function displayRestTime() {
  let restMinuteCount = restMinuteCountDown();
  let restSecondTime= restSecondCountDown();
  restTime.textContent = `${restMinuteCount}:${restSecondTime}`;
  return restTime;
}

function stopInterval() {
  if (document.getElementById('work').checked) {
    clearInterval(workInterval);
  }
  else {
    clearInterval(restInterval);
  }
}

function resetTimer() {
  // second = 0;
  if (document.getElementById('work').checked) {
    minute = 25;
    workSecond = 0;
    workTime.textContent = `${minute}:0${workSecond}`;
    return workTime;
  }
  else {
    restMinute = 5;
    restSecond = 0
    restTime.textContent = `0${restMinute}:0${restSecond}`;
    return restTime;
  }
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

// function secondCountDown() {
//   if (second > 10 && second <= 60) {
//     second--;
//     return second;
//   }
//   else if ((second > 0 && second <= 10)) {
//     second--;
//     return `0${second}`;
//   }
//   else if (second === 0 && minute === 0) {
//     return;
//   }
//   else {
//     return `00`;
//   }
// }

function workCountDown() {
  if (workSecond === 0 && minute > 0) {
    minute--;
    workSecond = 60;
    if ((minute >= 0 && minute < 10)) {
      return `0${minute}`;
    }
  }
  else if ((minute >= 0 && minute < 10)) {
    return `0${minute}`;
  }
  else {
    `${minute}`;
  }
  return minute;
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
  return '0' + restMinute;
}

//display timer text under desired section
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

//disable rest of the elements when Clicked Start Button
function disableRestHtml() {
  if (start) {
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

function changeTextOfStartButton() {
  if (!start) {
    document.getElementById('start').textContent = 'Stop';
    console.log('changed');
    start = true;
  }
  else {
    document.getElementById('start').textContent = 'Start';
    console.log('Start again');
    start = false;
  }
}




















// function runSecondCountDown() {
//   // let secondTime;
//   if (document.getElementById('work').checked) {
//     let secondTime = secondCountDown();
//     return secondTime;
//   }
//   else {
//     let secondTime = secondCountDown();
//     return secondTime;
//   }
// }

// let workInterval;
// let restInterval;

// function runTimer() {
//   let interval = {
//    workInterval: setInterval(displayWorkTime, 1000),
//    restInterval: setInterval(displayRestTime,1000)
//   };
//   // return document.getElementById('work').checked ? interval.workInterval : interval.restInterval;
//   let intervalId = document.getElementById('work').checked ? interval.workInterval : interval.restInterval;
//   console.log(intervalId);
//   return intervalId;
// }


// function stopTimer(){
//   document.getElementById('work').checked? clearInterval(setInterval(displayWorkTime, 1000)):clearInterval(setInterval(displayRestTime, 1000));
// }

// function resetTimer(){
//   let intervalRef = runTimer();
//   console.log(intervalRef);
//   // second = 0;
//   if(document.getElementById('work').checked){
//     minute = 25;
//     second = 0;
//     workTime.textContent = `${minute}:0${second}`;
//   }
  // else{
  //   restMinute = 5;
  //   second = 0;
  //   restTime.textContent = `${restMinute}:0${second}`;
  // }
//   console.log(clearTimeout(intervalRef));
// //  return clearInterval(intervalRef);
// return clearTimeout(intervalRef);
// }




















//the conditon (if (second === 0 && minute > 0)) only works if I declare the second variable global.
// let second;

//closure function: But how can I use the second variable inside of another function
// let sec = (function () {
//    second = 60;
//   return function () {
//     if (second > 10 && second <= 60) {
//       second--;
//       console.log(second);
//       return second;
//     }
//     else if ((second > 0 && second <= 10)) {
//       second--;
//       console.log('0' + second);
//       return `0${second}`;
//     }
//     // else if( second === 0 && minute > 0){
//     //   second = 60;
//     // }
//     else if (second === 0 && minute === 0) {
//       return;
//     }
//     else {
//       console.log('00');
//       return `00`;
//     }
//   }
//   })();







// let second = 60;

// function secondTimer() {
//   // let second = 60;
//   let sec = document.getElementById('second');
//   if (second > 10 && second <= 60) {
//     second--;
// sec.innerHTML = `${second}`;
//     console.log(sec.innerHTML);
//   }
// }

// document.getElementById('start').addEventListener('click', (e) => {
//   e.preventDefault();
//   setInterval(secondTimer, 1000);
// });



// let restMinute = 2;
// let workMinute = 10;
// let second = 60;
// let start = false;
// let workTimer;
// let restTimer;

// let restTime = document.getElementById("rest-time");
// let workTime = document.getElementById("work-time");

// // const radioButtons = document.querySelectorAll('form');

// // function startToSTopText() {//working fine
// //   document.getElementById('start').innerHTML = 'Stop';
// //   runCountDown();
// //   document.getElementById('reset').disabled = true;
// //   console.log('startToStop');
// //   start = true;
// // }

// // function stopToStartText() {//this function is not working as expected
// //   // let myTimer = runCountDown();
// //   document.getElementById('start').innerHTML = 'Start';
// //   clearInterval(workTimer);
// //   document.getElementById('reset').disabled = false;
// //   console.log('stopToStart');
// //   start = false;
// // }

// // //run function based on condition
// // function run(){
// //   return start ? stopToStartText() : startToSTopText();
// // }

// // //do CountDown
// // function runCountDown() {
// //   // if(document.getElementById('work').checked){
// //   workTimer = setInterval(workCountDown, 1000);
// //   // }
// //   // else{
// //    restTimer = setInterval(restCountDown, 1000);
// // // }
// //   return (document.getElementById('work').checked) ? workTimer : restTimer;
// // }

// //run timer here!
// document.getElementById("start").addEventListener('click', (e) => {
//   e.preventDefault();
//   // run();
//   setInterval(workCountDown,1000);
//   setInterval(restCountDown,1000);
// });

// // document.getElementById('reset').addEventListener('click', (e) => {
// //   e.preventDefault();
// //   minute = 10;
// //   second = 0;
// //   workTime.innerHTML = `${workMinute}:0${second}`;
// // });

// // //display timer text under desired section
// // radioButtons.forEach(function (radioButton) {
// //   // document.getElementById('break').style.display = 'none';
// //   radioButton.addEventListener('click', () => {
// //     if (document.getElementById('work').checked) {
// //       document.getElementById('work-min').style.display = 'block';
// //       document.getElementById('break').style.display = 'none';
// //       // console.log('work');
// //     }
// //     else {
// //       document.getElementById('break').style.display = 'block';
// //       document.getElementById('work-min').style.display = 'none';
// //       // console.log('rest');
// //     }
// //   });
// // });

// function restCountDown() {
//   if (second > 10) {
//     second--;
//     restTime.innerHTML = `0${restMinute}:${second}`;
//     console.log(restTime.innerHTML);
//   } else if (second > 0 && second <= 10) {
//     second--;
//     restTime.innerHTML = `0${restMinute}:0${second}`;
//     console.log(restTime.innerHTML);
//   } else if (second === 0 && restMinute > 0) {
//     restMinute--;
//     second = 59;
//     restTime.innerHTML = `0${restMinute}:${second}`;
//     console.log(restTime.innerHTML);
//   }
// }

// function workCountDown() {
//   if (second > 10) {
//     second--;
//     workTime.innerHTML = `${workMinute}:${second}`;
//     // console.log(workTime.innerHTML);
//     if (workMinute < 10) {
//       workTime.innerHTML = `0${workMinute}:${second}`;
//       console.log(workTime.innerHTML);
//     }
//   } else if (second > 0 && second <= 10) {
//     second--;
//     workTime.innerHTML = `${workMinute}:0${second}`;
//     // console.log(workTime.innerHTML);
//     if (workMinute < 10) {
//       workTime.innerHTML = `0${workMinute}:0${second}`;
//       console.log(workTime.innerHTML);
//     }
//   } else if (second === 0 && workMinute > 0) {
//     workMinute--;
//     second = 59;
//     workTime.innerHTML = `${workMinute}:${second}`;
//     // console.log(workTime.innerHTML);
//     if (workMinute < 10) {
//       workTime.innerHTML = `0${workMinute}:${second}`;
//       console.log(workTime.innerHTML);
//     }
//   }
// }




