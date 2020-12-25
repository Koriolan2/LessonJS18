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

    // Слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
              btn = document.querySelectorAll('.portfolio-btn'),
              dot = document.querySelectorAll('.dot'),
              slider = document.querySelector('.portfolio-content'),
              dots = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval = '';

        const prevSlide = (item, index, strClass) => {
            item[index].classList.remove(strClass);
        };

        const nextSlide = (item, index, strClass) => {
            item[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;    
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if(elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if(currentSlide >= slide.length){
                currentSlide = 0;
            }

            if(currentSlide < 0) {
                currentSlide = slide.length-1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });
        
        slider.addEventListener('mouseover', (event) => {
            if(event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);
    };
    slider();
    
    // hover-эффект на фото
    const myHover = () => {
        const wrapper = document.querySelector('.command');
        
        wrapper.addEventListener('mouseover', (even) => {
            let target = even.target;
            if(target.classList.contains('command__photo')) {
              let c = target.src;
              target.src = target.dataset.img;
                        
              target.addEventListener('mouseout', (even) => {
                target.src = c;
              });
            }

        });

    };
    myHover();

    //валидация полей формы калькулятора
    const validation = () =>{
        let fields = document.querySelectorAll('.calc-square, .calc-count, .calc-day');

        fields.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/\D/g,'');
            });
        });
    };
    validation();

    // калькулытор

    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
              calcType = document.querySelector('.calc-type'),
              calcSquare = document.querySelector('.calc-square'),
              calcDay = document.querySelector('.calc-day'),
              calcCount = document.querySelector('.calc-count'),
              totalValue = document.getElementById('total');
        
        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;

            const typeValue = calcType.options[calcType.selectedIndex].value,
                  squareValue = +calcSquare.value;

                  if(calcCount.value > 1) {
                        countValue += (calcCount.value - 1) / 10;
                  }

                  if ( calcDay && calcDay.value < 5) {
                      dayValue *= 2;                      
                  } else if (calcDay && calcDay.value < 10) {
                      dayValue *= 1.5;
                    }


            if(typeValue && squareValue) {
                total = price * typeValue * squareValue  * countValue * dayValue;
            } else {
                total = 0;
            }

            totalValue.textContent = total;
        }

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;

            if (target === calcType || target === calcSquare || target === calcDay || target === calcCount) {
                countSum();
            }
        });

    };
    calc(100);

});