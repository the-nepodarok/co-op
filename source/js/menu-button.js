const menuButton = document.querySelector('.page-header__button');
const navMenu = document.querySelector('.main-nav');

const media = window.matchMedia('(max-width: 767px)');

function widthChange(width) {

  if (width.matches) {
    navMenu.classList.add('visually-hidden');
    menuButton.classList.remove('menu-opened');

    menuButton.onclick = function() {
      navMenu.classList.toggle('visually-hidden');
      menuButton.classList.toggle('menu-opened');
    }
  }

  else {
    navMenu.classList.remove('visually-hidden');
    menuButton.classList.add('menu-opened');
  }
}

media.addListener(widthChange);

widthChange(media);

/*  Мои первоначальные попытки

if (media.matches) {
   navMenu.classList.add('visually-hidden');
   menuButton.classList.remove('menu-opened');
   alert('mobile width!');

  menuButton.onclick = function() {
    navMenu.classList.toggle('visually-hidden');
    menuButton.classList.toggle('menu-opened');
    alert('Butt clicked!');
  }
}

if (!media.matches) {
   navMenu.classList.remove('visually-hidden');
   menuButton.classList.add('menu-opened');
   alert('full width!');
 }
*/
