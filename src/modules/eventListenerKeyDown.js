const keyDownEsc = () => {
  const popup = document.querySelectorAll(`.popup`);



  document.addEventListener('keydown', (evt) => {      
    if (evt.keyCode === 27) {
      popup.forEach(element => {
        element.style.cssText = "visibility: hidden;";
      });
      
    }
  });

};

export default keyDownEsc;