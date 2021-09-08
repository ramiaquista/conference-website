const hamButton = document.getElementById('hamb-icon');
const menuSection = document.getElementById('m-menu');
const cancelButton = document.getElementById('cancel-icon');
const menuOptions = document.querySelectorAll('#options-list > li > a');

menuOptions.forEach((item) => {
  item.addEventListener('click', () => {
    menuSection.classList.add('dnone-mobile');
  });
});

hamButton.addEventListener('click', () => {
  menuSection.classList.remove('dnone-mobile');
});

cancelButton.addEventListener('click', () => {
  menuSection.classList.add('dnone-mobile');
});
