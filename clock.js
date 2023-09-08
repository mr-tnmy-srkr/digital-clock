const time = document.getElementById("time");
const timeFormat = document.getElementById("time-format");

setInterval(() => {
  const date = new Date();
  const hr = date.getHours();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  //    let hrs =  hours > 12 ? `${hours-12}` : hours;
  //  hrs = hours < 10 ? `0${hours}` : hours;

  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  time.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  timeFormat.innerHTML = hr >= 12 ? "PM" : "AM";
}, 1000);
