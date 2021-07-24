// hamburger toggel

let burger = document.querySelector('.burger')
let navBar = document.querySelector('.navbar')
let navLink = document.querySelector('#nav-link')

burger.addEventListener('click', () => {
    navLink.classList.toggle('nav-link-toggel')
    navLink.classList.toggle('animation')
    navBar.classList.toggle('bg-gray')

})











