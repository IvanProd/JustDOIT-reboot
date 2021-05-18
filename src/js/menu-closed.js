;(() => {
    const menuItmRef = document.querySelector("[data-menu-item]")
    const mobileMenuRef = document.querySelector("[data-menu]")
    menuItmRef.addEventListener("click", () => {
    const expanded = menuItmRef.getAttribute("aria-expanded") === "true" || false
    mobileMenuRef.removeClass("is-open")
  })   
})()


//  $('.menu').on('click', 'a', function() {
//    $('.menu__link').triggerHandler('click');
//  });

