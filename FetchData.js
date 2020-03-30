class FetchData {
  buscaTweets() {
    // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
    return fetch("./tweets.json", { method: 'get' })
  }

  buscaFollowers() {
    // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
    return fetch("./follow.json", { method: 'get' })
  }

  buscaUsuario() {
    // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
    return fetch("./usuario.json", { method: 'get' })
  }
}