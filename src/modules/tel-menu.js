const telMenu = () => {
  const telMenu = document.querySelector('.header-contacts__arrow');
  const telMenuArrow = telMenu.querySelector('img');
  const headerContacts = document.querySelector('.header-contacts__phone-number-accord');
  const headerContactsLink = headerContacts.querySelector('a');
  const head = document.querySelector('head');

  const telMenuActive = document.createElement('style');
  telMenuActive.textContent = `
  .activeTel {
    position: static;
    opacity: 1 !important;
  }
  .rotateTel {
    transform: rotate(180deg);
  }`;

  head.append(telMenuActive);

  telMenu.addEventListener('click', (e) => {
    if (!e.target.classList.contains('img')) {
      telMenuArrow.classList.toggle('rotateTel');
      headerContacts.classList.toggle('activeTel');
      headerContactsLink.classList.toggle('activeTel');
    }
  });
  
};

export default telMenu;