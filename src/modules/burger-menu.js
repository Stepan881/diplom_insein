const burgerMenu = () => {
  const menuBtn = document.querySelectorAll('.menu__icon');

  const popupMenu = document.querySelector('.popup-menu');
  const popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu');
  const closeMenuBtn = popupMenu.querySelector('.close-menu');

  menuBtn[0].addEventListener('click', () => {
    popupDialogMenu.style = 'transform: translateY(0);';
  });

  closeMenuBtn.addEventListener('click', () => {
    popupDialogMenu.style = 'transform: translateX(645px);';
  });


};

export default burgerMenu;