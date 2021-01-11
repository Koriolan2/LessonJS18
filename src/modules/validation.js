const validation = () =>{
     // Валидация полей калькулятора
    let fields = document.querySelectorAll('.calc-square, .calc-count, .calc-day');
    fields.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/\D/g,'');
        });
    });

    // Валидация полей имени
    let fieldsName = document.querySelectorAll('.form-name, #form2-name');
    fieldsName.forEach((elem) => {
        elem.addEventListener('input', (e) => {
            let target = e.target;
            elem.value = elem.value.replace(/[a-zA-Z0-9]*$/g,'');
            
            if (elem.value.length < 2) {
                target.closest('form').querySelector('.btn').disabled = 'disabled';
            } else {
                target.closest('form').querySelector('.btn').disabled = '';
            }
        });
    });

    // Валидация номера телефона
    let fieldsPhone = document.querySelectorAll('.form-phone');
     fieldsPhone.forEach((elem) => {
        elem.addEventListener('input', (event) => {
            let target = event.target;
            
            elem.value = elem.value.replace(/[a-zA-Zа-яА-Я]*$/g,'');

            if (elem.value.length <= 7 || elem.value.length >= 13) {
                target.closest('form').querySelector('.btn').disabled = 'disabled';
            } else {
                target.closest('form').querySelector('.btn').disabled = '';
            }
            
        });
    });


    // fieldsPhone.forEach((elem) => {
    //     elem.addEventListener('keyup', () => {
    //         let num = elem.value.replace( /\D/g, '' ).split( /(?=.)/ ), i = num.length - 1;
    //         if ( 0 <= i ) num.unshift( '+' );
    //         if ( 1 <= i ) num.splice( 3, 0, '(' );
    //         if ( 4 <= i ) num.splice( 7, 0, ') ' );
    //         if ( 7 <= i ) num.splice( 11, 0, '-' );
    //         if ( 9 <= i ) num.splice( 14, 0, '-' );
    //         elem.value = num.join( '' );  
            
    //         if (num < 7 || num > 18)
    //         {
    //             but.forEach((elem) => {
    //                 elem.disabled = 'disabled';
    //             });
    //         } else {
    //             but.forEach((elem) => {
    //                 elem.disabled = '';
    //             });
    //         }

    // Валидация сообщения
    let fieldsMessage = document.querySelector('.mess');

    fieldsMessage.addEventListener('input', () => {
               
       fieldsMessage.value = fieldsMessage.value.replace(/[^a-zA-Zа-яА-ЯёЁ0-9\ \,\.\?\!]/g,'');

    });

};
export default validation;
