const timerDays = document.getElementById('days');
const timerHours = document.getElementById('hours');
const timerMinutes = document.getElementById('minutes');
const timerSeconds = document.getElementById('seconds');

const targetDate = new Date("November 1 2025 00:00:00").getTime();

function timer() {
    const currentDate = new Date().getTime();
    const gap = targetDate - currentDate;

    const days = Math.floor(gap / 1000 / 60 / 60 / 24);
    const hours = Math.floor(gap/1000/60/60)%24;
    const minutes = Math.floor(gap / 1000 / 60) % 60;
    const seconds = Math.floor(gap / 1000 ) % 60;

    timerDays.innerHTML = days;   
    timerHours.innerHTML = hours;   
    timerMinutes.innerHTML = minutes;   
    timerSeconds.innerHTML = seconds;   
}

setInterval(timer, 1000);