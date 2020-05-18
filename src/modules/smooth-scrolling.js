const  smoothScrolling = () => {
  const popup = document.querySelector('.popup-menu');
  const link = popup.querySelectorAll('a');
  console.log('link: ', link);
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
          popupDialogMenu.style.cssText = 'transform: translateX(645px);';
            
        });
      }
    }
    
    const footerLink = document.querySelector('.button-footer');
    footerLink.addEventListener('click', (evt) => {
      evt.preventDefault();      
      document.querySelector('#main').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });

  });
};

export default smoothScrolling;