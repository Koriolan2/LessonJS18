const validation = () =>{
     // Валидация полей калькулятора
    let fields = document.querySelectorAll('.calc-square, .calc-count, .calc-day');
    fields.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/\D/g,'');
        });
    });

    // Валидация полей имени
    let fieldsName = document.querySelectorAll('.form-name');
    fieldsName.forEach((elem) => {
        elem.addEventListener('input', () => {
            console.log(elem.value);
            elem.value = elem.value.replace(/[a-zA-Z]*$/g,'');
        });
    });

    // Валидация номера телефона
    let fieldsPhone = document.querySelectorAll('.form-phone');
    fieldsPhone.forEach((elem) => {
        elem.addEventListener('input', () => {
            console.log(elem.value);
            elem.value = elem.value.replace(/[a-zA-Zа-яА-Я]*$/g,'');
        });
    });
    
};
export default validation;
