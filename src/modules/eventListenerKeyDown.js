const keyDownEsc = () => {
  const popup = document.querySelectorAll(`.popup`);

  document.addEventListener('keydown', (evt) => {      
    if (evt.keyCode === 27) {
      popup.forEach(element => {
        element.style.cssText = "visibility: hidden;";
      });
    }
  });

  popup.forEach(element => {
    element.addEventListener('click', (evt) => {  
      if (evt.target.matches('.popup')) {      
        element.style.cssText = "visibility: hidden;";
      }
    });
  });


};

export default keyDownEsc;