const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let lmonth = 3
let lday = 4
let now1 = new Date()
// 当前时间的农历
let lnow = calendar.solar2lunar(now1.getFullYear(),now1.getMonth(),now1.getDate());
// 生日公历
let lbj = calendar.lunar2solar(lnow.lYear,lmonth,lday)
let gongBirth = new Date(lbj.date)
// 公历生日加一天 超过了 下一年为基准
if (gongBirth.getTime() + day <= now1.getTime()) {
  lbj = calendar.lunar2solar(lnow.lYear + 1,lmonth,lday)
  gongBirth = new Date(lbj.date)
} else if (now1.getTime() - gongBirth.getTime() > 0 && now1.getTime() - gongBirth.getTime() < day) {
  window.location.href="https://porkmanic.github.io/birthd/2/";
}
let countDown = gongBirth.getTime();
function x () {

  let now = new Date().getTime(),
    distance = countDown - now;

  document.getElementById('days').innerText = Math.floor(distance / (day)),
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

}
window.onload = x
setInterval(x,second)
