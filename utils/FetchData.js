class FetchData {
  buscaTweets() {
    // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
    return fetch('./tweets/tweets.json', { method: 'get' })
  }

  buscaFollowers() {
    // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
    return fetch('./follow/follow.json', { method: 'get' })
  }

  buscaUsuario() {
    // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
    return fetch('./user/usuario.json', { method: 'get' })
  }
}