const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;


let countDown = new Date('Mar 13, 2020 00:00:00').getTime();
let now = new Date().getTime(),
  distance = countDown - now;
  if (Math.floor(distance / (day)) <= 0
  && Math.floor((distance % (day)) / (hour)) <=0
  && Math.floor((distance % (hour)) / (minute)) <= 0
  && Math.floor((distance % (minute)) / second) <= 0) {
    window.location.href="https://porkmanic.github.io/birthd/2/";
  }
function x () {

  let now = new Date().getTime(),
    distance = countDown - now;

  document.getElementById('days').innerText = Math.floor(distance / (day)),
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

  //do something later when date is reached
  //if (distance < 0) {
  //  clearInterval(x);
  //  'IT'S MY BIRTHDAY!;
  //}

}
window.onload = x
setInterval(x,second)
