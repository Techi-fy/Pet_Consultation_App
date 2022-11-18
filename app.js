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

dropList.style.display = "none";

dropMenu.addEventListener('mouseenter', (event) => {
    if(dropList.style.display == "none"){
       dropList.style.display = "block"
    }
else{
    dropList.style.display= "none"
}
})


if (passwordForm.value.length >= 20) {
  messages.push('Password must be less than 25 characters')
}

if (messages.length > 0) {
  e.preventDefault()
  errorElement.innerText = messages.join(', ')

}
//function CheckPassword(passwordForm) 
var pwSecure =  /^[A-Za-z]\w{7,14}$/;
if(passwordForm.value.match(pwSecure)) 
{ 
alert('Correct, try another...')
return true;
}