window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    // Таймер
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
    countTimer('31 december 2020');

    // Меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li'),
            body = document.body;

        body.addEventListener('click', (event) => {
            let target = event.target;
            
            if (target.closest('.menu') || target.closest('.close-btn')) {
                handlerMenu();
            }
        });

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        // btnMenu.addEventListener('click', handlerMenu);

        // closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((elem => {
            elem.addEventListener('click', handlerMenu);
        }));
    }
    toggleMenu();

    // PopUp Window

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
            });
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');

                if(!target) {
                    popup.style.display='none';
                }
            }
               
        });
    }
    togglePopUp();

    // табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab'); 

            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }

        });
    };
    tabs();
});