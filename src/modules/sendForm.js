const sendForm = () => {
    const errorMessage = 'Что-то пошло не так!',
          loadMessage = 'Загрузка...',
          successMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
          form = document.getElementById('form1'),
          modalForm = document.getElementById('form2'),
          footerForm = document.getElementById('form3');
        
    
    const statusMessage = document.createElement('div');
   
    statusMessage.style.cssText = 'font-size:2rem;';

    const clearField = (form) => {
        form.querySelectorAll('input').forEach((elem) => {
            elem.value='';
        });
        setTimeout(()=>{
            statusMessage.textContent ='';
        }, 5000);
    };

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
    
                    clearField(form);
    
                })
                .catch ((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
    
                    clearField(form);
                    
                });
    });

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        modalForm.appendChild(statusMessage);

            const formData = new FormData (modalForm);
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
    
                    clearField(modalForm);
    
                })
                .catch ((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
    
                    clearField(modalForm);
                    
                });
    });

    footerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);

            const formData = new FormData (footerForm);
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
    
                    clearField(footerForm);
    
                })
                .catch ((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
    
                    clearField(footerForm);
                    
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
