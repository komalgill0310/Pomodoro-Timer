let second = 60;
let minute =10;

let workTime = document.getElementById('work-time');

setInterval(displayWorkTime, 1000);

function secondCountDown() {
  if (second > 10 && second <= 60) {
    second--;
    console.log(second);
  }
  else if (second > 0 && second <= 10) {
    second--;
    console.log('0' + second);
     return `0${second}`;
  }
  else {
    second = 59;
  }
  return second;
}

function workCountDown() {
    if(second === 0){
    minute--;
    console.log(minute);
    if ((minute > 0 && minute < 10)) {
      return `0${minute}`;
   }
  }
  else if ((minute > 0 && minute < 10)) {
     return `0${minute}`;
  }
  else {
     `${minute}`;
  }
  return minute;
}

function displayWorkTime() {
  let workMinute = workCountDown();
  let secondTime = secondCountDown();
  workTime.innerHTML = `${workMinute}:${secondTime}`;
  return workTime;
}
























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




