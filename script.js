import getInputResults from "./func.js"
function getTimeAndDay() {
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');

    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    timeElement.textContent = `${hours}:${minutes}`

    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const weekDays = days[new Date().getDay()];
    dayElement.textContent = `${weekDays}`;
  }

  setInterval(getTimeAndDay, 1000);
  getTimeAndDay();


  getInputResults()
  