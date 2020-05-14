const telMask = () => {
  const inp = document.querySelectorAll('.feedback__input-input');
  inp.forEach(el => {
    el.setAttribute('placeholder', '+7 (___)___-__-__');
    console.log('el: ', el);
    el.addEventListener('input', (evt) => {
    
      // let x = evt.target.value.match(/(\+7{1})(\d{3})(\d{3})(\d{2})(\d{2})/);
      // console.log(x);
      
      // evt.target.value = "+" + x[1] +" (" + x[2] + ")" + x[3] + "-" + x[4] + "-" + x[5];

    });
  });

  
};

export default telMask;