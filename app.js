const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');
const dropMenu = document.getElementById('drop-menu-src')
const dropList = document.getElementById('drop-list')
const passwordForm = document.getElementById('password-form')

//document.getElementById('error')

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Display Links Drop Menu
/*
dropList.style.display = "none";

dropMenu.addEventListener('mouseenter', (event) => {
    if(dropList.style.display == "none"){
       dropList.style.display = "block"
    }
else{
    dropList.style.display= "none"
}
})
*/