const  closeMenu = () => {
  const popupDialogMenu = document.querySelector('.popup-menu .popup-dialog-menu');
  let arrtibute = popupDialogMenu.getAttribute('data');
  popupDialogMenu.style = '';
  popupDialogMenu.setAttribute('data', 'close');  
};

export default closeMenu;