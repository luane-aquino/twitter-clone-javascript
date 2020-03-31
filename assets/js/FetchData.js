class FetchData {
  buscaTweets() {
    // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
    return fetch('./assets/data/tweets.json', { method: 'get' })
  }

  buscaFollowers() {
    // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
    return fetch('./assets/data/follow.json', { method: 'get' })
  }

  buscaUsuario() {
    // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
    return fetch('./assets/data/usuario.json', { method: 'get' })
  }
}