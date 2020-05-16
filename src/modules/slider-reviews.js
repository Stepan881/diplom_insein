const sliderReviews = () => {
  const reviews = document.querySelector('#reviews');
  const arrowLeft = reviews.querySelector('#reviews-arrow_left');
  const arrowRight = reviews.querySelector('#reviews-arrow_right');
  const reviewsSlide = reviews.querySelectorAll('.reviews-slider__slide');
  const slideCount = reviewsSlide.length;
  let slideActive = 0;


  const renderSlide = () => {
    reviewsSlide.forEach(el => {
      el.style.display = 'none';     
    });
    reviewsSlide[slideActive].style.display = 'flex';
  };
  
  arrowRight.addEventListener('click', () => {
    ++slideActive;
    if (slideActive > slideCount - 1) {
      slideActive = 0;
    }
    
    renderSlide();
  });
  arrowLeft.addEventListener('click', () => {
    --slideActive;
    if (slideActive < 0) {
      slideActive = slideCount - 1;
    }

    renderSlide();
  });
};

export default sliderReviews;