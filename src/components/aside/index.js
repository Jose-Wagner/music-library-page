import './style.css'

function SideMenu() {
  return /*html*/ `
    <aside>
      <div class="img-name">
        <img class="img-profile" src="assets/profile.jpg" alt="Dany Schudler">
        <p class="name">Dany Schudler</p>
      </div>
      <div class="text-icon">
        <p class="text">Edit profile</p>
        <a href="#"><img src="assets/icons/settings.png" alt="icon"></a>
      </div>
      <div class="line1"></div>
      <nav class="nav">
        <div class="menu">
          <img src="assets/icons/overview.png" alt="icon">
          <a class="menu-title" href="#">Overview</a>
        </div>
        <div class="menu">
          <img src="assets/icons/news.png" alt="icon">
          <a class="menu-title" href="#">News</a>
        </div>
        <div class="menu">
          <img src="assets/icons/playlist.png" alt="icon">
          <a class="menu-title" href="#">Playlists</a>
        </div>
        <div class="menu">
          <img src="assets/icons/discover.png" alt="icon">
          <a class="title" href="#">Discover</a>
        </div>
      </nav>
      <div class="line2"></div>
      <nav class="nav2">
        <div class="menu2">
          <img src="assets/icons/dashboard.png" alt="icon">
          <a href="#">Dashboard</a>
        </div>
        <div class="menu2">
          <img src="assets/icons/messages.png" alt="icon">
          <a href="#">Messages</a>
        </div>
        <div class="menu2">
          <img src="assets/icons/notification.png" alt="icon">
          <a href="#">Notifications</a>
        </div>
        <div class="menu">
          <img src="assets/icons/account.png" alt="icon">
          <a href="#">Account</a>
        </div>
      </nav>
      
    </aside>
  `
}

export default SideMenu
