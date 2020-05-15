const accordion = (size) => {
  const faq = document.querySelector('#faq');
  const titleBlock = faq.querySelectorAll('.title_block');
  faq.addEventListener(`click`, (evt) => {
    titleBlock.forEach(el => {
      el.classList.remove('msg-active');
    });
    evt.target.classList.add('msg-active');
  });

};
export default accordion;