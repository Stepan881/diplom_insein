import closeMenu from './close-menu.js';

const  smoothScrolling = () => {
  const link = document.querySelectorAll('a');

  link.forEach(element => {
    if (element.getAttribute('href')) {
      let symbol = element.getAttribute('href').substr(0, 1);
      if (symbol === '#') {
        element.addEventListener('click', (evt) => {
          evt.preventDefault();
          let link = element.getAttribute('href').substr(1);
          document.getElementById(link).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          closeMenu();
        });
      }
    }
    
  });

};

export default smoothScrolling;