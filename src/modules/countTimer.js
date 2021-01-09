function countTimer(deadline) {
    let timerDays = document.querySelector('#timer-days'),
        timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60) % 24,
            day = Math.floor(timeRemaining / 60 / 60 / 24);
        return { timeRemaining, day, hours, minutes, seconds };
    }

    function updateClock() {
        let timer = getTimeRemaining();

        timerDays.textContent = formatDate(timer.day);
        timerHours.textContent = formatDate(timer.hours);
        timerMinutes.textContent = formatDate(timer.minutes);
        timerSeconds.textContent = formatDate(timer.seconds);

        if (timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        } else {
            timerDays.textContent = '00';
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }

    function formatDate(c) {
        if (c < 10) {
            return '0' + c;
        } else {
            return c;
        }
    }
    updateClock();
}

export default countTimer;