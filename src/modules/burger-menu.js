const burgerMenu = (windowWidth) => {
  const menuBtn = document.querySelector('.menu .menu__icon');

  const popupMenu = document.querySelector('.popup-menu');
  let popupDialogMenu = popupMenu.querySelector('.popup-dialog-menu');
  const closeMenuBtn = popupMenu.querySelector('.close-menu');

  if (windowWidth < 576) {
    popupDialogMenu.style.cssText = 'transform: translateY(-1500px);';    
  } else {
    popupDialogMenu.style.cssText = 'transform: translateX(645px);';
  }


  menuBtn.addEventListener('click', () => {
    popupDialogMenu.style.cssText = 'transform: translateY(0);';
  });

  closeMenuBtn.addEventListener('click', () => {
    if (windowWidth < 576) {
      popupDialogMenu.style.cssText = 'transform: translateY(-1500px);';
    } else {
      popupDialogMenu.style.cssText = 'transform: translateX(645px);';
    }
    
  });


};

export default burgerMenu;