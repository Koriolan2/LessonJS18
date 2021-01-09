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
export default toggleMenu;