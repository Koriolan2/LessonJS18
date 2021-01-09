const validation = () =>{
    let fields = document.querySelectorAll('.calc-square, .calc-count, .calc-day');

    fields.forEach((elem) => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/\D/g,'');
        });
    });
};
export default validation;
