import popupThank from './popup-thank';

const ajaxPost = () =>  {
  
  const forms = document.querySelectorAll('form');
  let loaderHtml = '';

  const addStatus = (form, status, color = 'red') => {
    const stratus = `
    <style>
      .preloader{
      width: 100%;
      text-align: center;
      color: ${color};
      margin: 5px 0;
      }
    </style>

    <div class="preloader">${status}</div>`;

      if (document.querySelector('.preloader')) {
        return;
      }

    form.insertAdjacentHTML(`afterbegin`, stratus);
    loaderHtml = document.querySelector('.preloader');

    setTimeout(() => {
      loaderHtml.remove();
    }, 5000);
  };


  forms.forEach(form => {

    const postData = (body) => {
      return fetch('./db/server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        mode: 'cors'
      }); 
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();


      const checkbox = [...event.target.elements].filter((item) => item.type === 'checkbox');
      if (!checkbox[0].checked) {
        addStatus(form, 'Согласитесь на обработку своих персональных данных');
        return;
      } 
      const formTel = [...event.target.elements].filter((item) => item.name === 'phone');
      if (validateTel(formTel)) {
        addStatus(form, 'Не верно введен номер телефона');
        return;
      } 
      const formData = new FormData(form);

      let body = {};
      for (let val of formData.entries()) {
        body[val[0]] = val[1];
      }

      const outputData = () => {
        popupThank();
        addStatus(form, 'Заявка отправлена', 'green');
        form.reset();
      };

      const error = () => {
        addStatus(form, 'Ошибка запроса', 'red');
        form.reset();
      };
      

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
              throw 'error !!! ';
          }          
          outputData();
        })
        .catch(error);

    });
  });

  const validateTel = (tel) => {
    let str = tel[0].value.length;
    if (str === 18) {
      return false;
    } else {
      return true;
    }

  };
}



export default ajaxPost;