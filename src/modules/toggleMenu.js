const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul a'),
        main = document.querySelector('main'),
        body = document.body;

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.menu') || target.closest('.close-btn')) {
            handlerMenu();
        }
            
    });

    main.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('main')) {
            menu.classList.remove('active-menu');
        }
    });

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menuItems.forEach((elem => {
        elem.addEventListener('click', handlerMenu);
    }));
}
export default toggleMenu;