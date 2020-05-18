const burgerMenu = () => {
  const menuBtn = document.querySelector('.menu .menu__icon');

  const popupMenu = document.querySelector('.popup-menu');
  let popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu');
  const closeMenuBtn = popupMenu.querySelector('.close-menu');

  menuBtn.addEventListener('click', () => {
    
    popupDialogMenu.style.cssText = 'transform: translateY(0);';

  });

  closeMenuBtn.addEventListener('click', () => {
    popupDialogMenu.style.cssText = 'transform: translateX(645px);';
  });


};

export default burgerMenu;