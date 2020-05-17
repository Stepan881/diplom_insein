import closeMenu from './close-menu.js';

const burgerMenu = () => {
  const menuBtn = document.querySelector('.menu__icon');
  const popupMenu = document.querySelector('.popup-menu');
  let popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu');
  const closeMenuBtn = popupMenu.querySelector('.close-menu');

  menuBtn.addEventListener('click', () => {
    popupDialogMenu.style = 'transform: translate3d(0px, 0px, 0px);';
    popupDialogMenu.setAttribute('data', 'open');
  });

  closeMenuBtn.addEventListener('click', () => {
    closeMenu();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      closeMenu();
    }
  });
};

export default burgerMenu;