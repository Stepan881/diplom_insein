const popupThank = () => {
  const popupThank = document.querySelector('.popup-thank');
  const closeThank = popupThank.querySelector('.close-thank');

  popupThank.style.cssText = 'visibility: visible;';

  closeThank.addEventListener(`click`, () => {
    popupThank.style.cssText = 'visibility: hidden;';
  });
}

export default popupThank;