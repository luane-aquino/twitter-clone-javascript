class Usuario {
  constructor() {
    // profile info
    this.nome = document.getElementById("nome")
    this.usuario = document.getElementById("usuario")
    this.website = document.getElementById("website")
    this.local = document.getElementById("local")
    this.cadastro = document.getElementById("cadastro")
    this.btnNome = document.getElementById("btn-nome")
    // user stats
    this.tweetsQuantidade = document.getElementById("tweets-quantidade")
    this.seguindoQuantidade = document.getElementById("seguindo-quantidade")
    this.seguidoresQuantidade = document.getElementById("seguidores-quantidade")
    this.userLikes = document.getElementById("user-likes")
  }

  mostraUsuario(users) {
    const user = users[0]

    // profile info
    this.nome.innerHTML = `<a>${user.nome}<a>`
    this.usuario.innerHTML = `<a>@${user.usuario}</a>`
    this.website.innerHTML = `<i class="octicon octicon-link"></i>&nbsp;${user.website}`
    this.local.innerHTML = `<i class="octicon octicon-location"></i>&nbsp;${user.local}`
    this.cadastro.innerHTML = `<i class="octicon octicon-calendar"></i>Joined ${user.cadastro}`
    this.btnNome.innerHTML = `Tweet to ${user.nome}`
    // user stats
    this.tweetsQuantidade.innerHTML = `${user.quantidade_tweets}`
    this.seguindoQuantidade.innerHTML = `${user.seguindo}`
    this.seguidoresQuantidade.innerHTML = `${user.seguidores}`
    this.userLikes.innerHTML = `${user.likes}`
  }
}