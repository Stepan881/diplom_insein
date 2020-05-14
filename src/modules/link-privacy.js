const linkPrivacy = () => {
  const linkPrivacys = document.querySelectorAll('.link-privacy');
  const popupPrivacy = document.querySelector('.popup-privacy');
  const closeBtn = popupPrivacy.querySelector('.mobile-hide');

  linkPrivacys.forEach(el => {
    el.addEventListener(`click`, () => {
      popupPrivacy.style = "visibility: visible;";
      
    });
  });


  popupPrivacy.addEventListener(`click`, (evt) => {
    if (evt.target.classList.contains('popup-privacy')) {
      popupPrivacy.style = "visibility: hidden;";
    }
  });

  closeBtn.addEventListener(`click`, () => {
    popupPrivacy.style = "visibility: hidden;";
  });


  document.addEventListener('keydown', (evt) => {
    popupPrivacy.style = "visibility: hidden;";
  });

};

export default linkPrivacy;