class FollowCard {
  constructor() {
    const showLista = document.getElementById("follow-list")
    this.lista = showLista
  }

  mostraFollowers(dados) {
    let card = ''
    dados.forEach(function (elemento) {

      card += `
      <li class="tweet-card">
        <div class="tweet-content">
          <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
          <div class="tweet-header">
            <span class="fullname">
              <strong>${elemento.nome}</strong>
            </span>
            <span class="username">@${elemento.usuario}</span>
          </div>

          <button class="btn btn-follow">Follow</button>
        </div>
      </li> <br>`
    });

    this.lista.innerHTML = card
  }

}