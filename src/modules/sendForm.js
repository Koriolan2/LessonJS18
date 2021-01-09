const sendForm = () => {
    const errorMessage = 'Что-то пошло не так!',
          loadMessage = 'Загрузка...',
          successMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
          form = document.getElementById('form1');
    
    const statusMessage = document.createElement('div');
   
    statusMessage.style.cssText = 'font-size:2rem;';
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);

        const formData = new FormData (form);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });
        statusMessage.textContent = loadMessage;
                  
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                console.log(response);

                statusMessage.textContent = successMessage;
            })
            .catch ((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });           
    };
};
export default sendForm;
