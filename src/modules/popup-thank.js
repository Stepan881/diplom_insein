const popupThank = () => {
  const popupThank = document.querySelector('.popup-thank');
  const closeThank = popupThank.querySelector('.close.close-thank');

  popupThank.style.visibility = "visible";

  closeThank.addEventListener(`click`, (evt) => {
    popupThank.style = "visibility: hidden;";
  });
}

export default popupThank;