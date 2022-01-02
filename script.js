let second = 60;
let minute = 25;
let restMinute = 5;

// let interval;

let workTime = document.getElementById('work-time');
let restTime = document.getElementById('rest-time');

const radioButtons = document.querySelectorAll('form');
let start = false;//button is not clicked

document.getElementById("start").addEventListener('click', (e) => {
  e.preventDefault();
  changeTextOfStartButton();
  disableRestHtml();
  runTimer();
  // console.log(setInterval(sec,1000));
});

document.getElementById("reset").addEventListener('click', (e) => {
  e.preventDefault();
  resetTimer();
  });

function displayWorkTime() {
  let workMinute = workCountDown();
  let secondTime = secondCountDown();
  // let secondTimer = sec(); when have a closure function 
  // workTime.textContent = `${workMinute}:${secondTimer}`;when have a closure function 
  workTime.textContent = `${workMinute}:${secondTime}`;
  // console.log(workTime.innerHTML);//running after the condition fails
  return workTime;
}

function displayRestTime() {
  let restMinuteCount = restMinuteCountDown();
  let secondTime = secondCountDown();
  restTime.textContent = `${restMinuteCount}:${secondTime}`;
  // console.log(restTime.innerHTML);//running after the condition fails
  return restTime;
}

function secondCountDown() {
  if (second > 10 && second <= 60) {
    second--;
    return second;
  }
  else if ((second > 0 && second <= 10)) {
    second--;
    return `0${second}`;
  }
  else if (second === 0 && minute === 0) {
    return;
  }
  else {
    return `00`;
  }
}

function workCountDown() {
  if (second === 0 && minute > 0) {
    minute--;
    second = 60;
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
  if (second === 0 && restMinute > 0) {
    restMinute--;
    second = 60;
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
let workInterval;
let restInterval;

function runTimer() {
   workInterval = setInterval(displayWorkTime, 1000);
   restInterval = setInterval(displayRestTime,1000);
  return document.getElementById('work').checked ? workInterval : restInterval;
}

// function stopTimer(){
//   document.getElementById('work').checked? clearInterval(setInterval(displayWorkTime, 1000)):clearInterval(setInterval(displayRestTime, 1000));
// }

function resetTimer(){
  second = 0;
  if(document.getElementById('work').checked){
    minute = 25;
    workTime.textContent = `${minute}:0${second}`;
  }
  else{
    restMinute = 5;
    restTime.textContent = `${restMinute}:0${second}`;
  }
}




















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




