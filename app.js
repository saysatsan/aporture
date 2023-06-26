const burger = document.querySelector(".burger_menu");
const burgerMenu = document.querySelector('.nav_wrap');

const navBurgerIconBefore = document.querySelector('.nav_burger_icon_before');
const navBurgerIconAfter = document.querySelector('.nav_burger_icon_after');
const navBurgerIcon = document.getElementById('burger_center');


//  відкривання/закривання меню при кліку на бургер, бургер/хрестик
burger.addEventListener("click",() =>{
    burgerMenu.classList.toggle('open_menu');
    navBurgerIconBefore.classList.toggle('open');
    navBurgerIconAfter.classList.toggle('open');
    navBurgerIcon.classList.toggle('none');
});

// закривання меню при кліку на поле меню
burgerMenu.addEventListener('click', () =>{
    burgerMenu.classList.remove ('open_menu');
    navBurgerIconBefore.classList.remove('open');
    navBurgerIconAfter.classList.remove('open');
    navBurgerIcon.classList.remove('none');
  
  });