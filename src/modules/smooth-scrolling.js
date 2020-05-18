const  smoothScrolling = () => {
  const link = document.querySelectorAll('a');
  link.forEach(element => {
    if (element.getAttribute('href')) {
      let symbol = element.getAttribute('href').substr(0, 1);

      if (symbol === '#' && element.getAttribute('href').substr(1).length > 0) {
        element.addEventListener('click', (evt) => {
          evt.preventDefault();
          let link = element.getAttribute('href').substr(1);
          document.getElementById(link).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          const popupDialogMenu = document.querySelector('.popup-menu .popup-dialog-menu');
          popupDialogMenu.style = 'transform: translateX(645px);';
            
        });
      }
    }
    
  });

};

export default smoothScrolling;