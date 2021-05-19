(() => {
  const menuItmRef = document.querySelectorAll('[data-menu-item]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const menuBtnRef = document.querySelector('[data-menu-button]');

  function closeMenu() {
    mobileMenuRef.classList.remove('is-open');
    menuBtnRef.classList.toggle('is-open');
  }
  Array.from(menuItmRef).forEach(item => item.addEventListener('click', closeMenu));
})();