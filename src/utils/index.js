const openCloseButton = document.querySelector('#buttonopenclosemenu');
const menumobileitems = document.querySelector('#menu-mobile-items');

openCloseButton.addEventListener('click', e => {
    menumobileitems.classList.toggle('menu-mobile-closed');
});