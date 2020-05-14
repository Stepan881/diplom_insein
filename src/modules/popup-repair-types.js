import closeMenu from './close-menu.js';

const popupRepairTypes = () => {
  const linkLists = document.querySelectorAll('.link-list');
  const popupRepairTypes = document.querySelector(`.popup-repair-types`);
  const closeBtns = popupRepairTypes.querySelectorAll(`.close`);

  linkLists.forEach(el => {
    if (!el.matches('a')) {
      el.addEventListener(`click`, () => {
        closeMenu();
        popupRepairTypes.style = "visibility: visible;";
      });
    }
  });

  popupRepairTypes.addEventListener(`click`, (evt) => {
    if (evt.target.classList.contains('popup-repair-types')) {
      popupRepairTypes.style = "visibility: hidden;";
    }
    
  });

  closeBtns.forEach(element => {
    element.addEventListener(`click`, () => {
      popupRepairTypes.style = "visibility: hidden;";
    });
  });

  document.addEventListener('keydown', (evt) => {
    popupRepairTypes.style = "visibility: hidden;";
  });
};

export default popupRepairTypes;