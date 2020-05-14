const burgerMenu = () => {
  const menuBtn = document.querySelector('.menu__icon');
  const popupMenu = document.querySelector('.popup-menu');
  const popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu');
  const closeMenu = popupMenu.querySelector('.close-menu');

  menuBtn.addEventListener('click', () => {
    popupDialogMenu.style = 'transform: translate3d(0px, 0px, 0px);';
  });

  closeMenu.addEventListener('click', () => {
    popupDialogMenu.style = '';
  });

  document.addEventListener('keydown', (evt) => {
    popupDialogMenu.style = '';
    
  });
};

export default burgerMenu;