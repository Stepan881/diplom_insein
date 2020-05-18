const scheme = () => {
  const scheme = document.querySelector('#scheme');
  
  const schemeSlide = scheme.querySelectorAll('.scheme-nav__item');
  const schemeImage = scheme.querySelectorAll('.scheme-slider__slide.fade-tab');
  const schemeDescription = scheme.querySelectorAll('.scheme-description-block');


let activeSlide = 0;

  schemeSlide.forEach((element, i) => {
    element.classList.remove('active');
    element.addEventListener('click', () => {
      activeSlide = i;
      render();
      element.classList.add('active');
    });
    
  });

  const render = () => {
    schemeSlide.forEach(element => {
      element.classList.remove('active');
    });
    schemeImage.forEach(element => {
      element.style.display = 'none';
    });
    schemeDescription.forEach(element => {
      element.classList.remove('visible-content-block');
    });
    schemeSlide[activeSlide].classList.add('active');
    schemeImage[activeSlide].style.display = 'flex';
    schemeDescription[activeSlide].classList.add('visible-content-block');
  };

  render();
};

export default scheme;