class Usuario {
  constructor() {
    const showUsuario = document.getElementById("profile")
    this.profile = showUsuario
    const showProfileStats = document.getElementById("profile-stats")
    this.profileStats = showProfileStats
  }

  mostraUsuario(users) {
    const user = users[0]
    let usuario = ''
    let usuarioStats = ''

    usuario = `
      <!-- Left column -->
      <div class="profile-header">
        <!-- Header information -->
        <h3 class="profile-fullname"><a>${user.nome}<a></h3>
        <h2 class="profile-element"><a>@${user.usuario}</a></h2>
        <a class="profile-element profile-website" hrerf=""><i
            class="octicon octicon-link"></i>&nbsp;${user.website}</a>
        <a class="profile-element profile-website" hrerf=""><i
            class="octicon octicon-location"></i>&nbsp;${user.local}</a>
        <h2 class="profile-element"><i class="octicon octicon-calendar"></i>Joined ${user.cadastro}</h2>
        <button class="btn btn-search-bar tweet-to-btn">Tweet to ${user.nome}</button>
      </div>`

    usuarioStats = `
      <li class="profile-stats-item-active">
        <a>
          <span class="profile-stats-item profile-stats-item-label">Tweets</span>
          <span class="profile-stats-item profile-stats-item-number">${user.quantidade_tweets}</span>
        </a>
      </li>
      <li>
        <a>
          <span class="profile-stats-item profile-stats-item-label">Following</span>
          <span class="profile-stats-item profile-stats-item-number">${user.seguindo}</span>
        </a>
      </li>
      <li>
        <a>
          <span class="profile-stats-item profile-stats-item-label">Followers</span>
          <span class="profile-stats-item profile-stats-item-number">${user.seguidores}</span>
        </a>
      </li>
      <li>
        <a>
          <span class="profile-stats-item profile-stats-item-label">Likes</span>
          <span class="profile-stats-item profile-stats-item-number">${user.likes}</span>
        </a>
      </li> `

    this.profile.innerHTML = usuario
    this.profileStats.innerHTML = usuarioStats
  }
}