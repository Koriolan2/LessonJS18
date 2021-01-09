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

export default myHover;
