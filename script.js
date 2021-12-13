let minute = 5;
let second = 60;

let time = document.getElementById("restTime");

document.getElementById("start").addEventListener('click', (e) => {
  e.preventDefault();
  setInterval(restCountDown, 1000);
});

// function displayRest() {
//   if (document.getElementById('rest')) {
//     let breakTime = document.getElementById('breakTime');
//     breakTime.display = 'block';
//     console.log(breakTime.display);
//   }
// }

// displayRest();

function restCountDown() {
  if (second > 10) {
    second--;
    time.innerHTML = "0" + minute + ":" + second;
    console.log(time.innerHTML);
  }
  else if (second > 0 && second <= 10) {
    second--;
    time.innerHTML = "0" + minute + ":" + "0" + second;
    console.log(time.innerHTML);
  }
  else if (second === 0 && minute > 0) {
    minute--;
    second = 59;
    time.innerHTML = "0" + minute + ":" + second;
    console.log(time.innerHTML);
  }
}


