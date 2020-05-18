const buttonWide = () => {
  const buttonWide = document.querySelectorAll('.button_wide');
  const popupConsultation = document.querySelector('.popup-consultation');
  const closePopup = popupConsultation.querySelector('.close-consultation');

  buttonWide.forEach(el => {
    el.addEventListener(`click`, () => {
      popupConsultation.style.cssText = "visibility: visible;";
    });
  });

  closePopup.addEventListener(`click`, (evt) => {
    popupConsultation.style.cssText = "visibility: hidden;";
  });

};

export default buttonWide;