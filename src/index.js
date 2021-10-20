import './styles/main.css';

const hamburgerIcon = document.querySelector('#hamburger')
const drawerNavigationList = document.querySelector('.nav__list ')

hamburgerIcon.addEventListener('click', () => {
  drawerNavigationList.classList.toggle('clicked')
})