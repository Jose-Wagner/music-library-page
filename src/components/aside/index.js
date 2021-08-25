import './style.css'

function SideMenu(icon = 'profile', alt = 'Dany Schudler') {
  return /*html*/ `
    <aside class="side-menu">
    <img class="img-profile" src="assets/${icon}.jpg" alt="${alt}">
    </aside>
  `
}

export default SideMenu
