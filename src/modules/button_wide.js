const buttonWide = () => {
  const buttonWide = document.querySelectorAll('.button_wide');
  const popupConsultation = document.querySelector('.popup-consultation');
  const closePopup = popupConsultation.querySelector('.close-consultation');

  buttonWide.forEach(el => {
    el.addEventListener(`click`, () => {
      popupConsultation.style = "visibility: visible;";
    });
  });

  closePopup.addEventListener(`click`, (evt) => {
    popupConsultation.style = "visibility: hidden;";
  });

};

export default buttonWide;