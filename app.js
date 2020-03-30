const objetoFetchData = new FetchData()
const objetoTweetCard = new TweetCard()
const objetoFollowerCard = new FollowCard()
const objetoUsuario = new Usuario()

objetoFetchData.buscaTweets()
  .then(function (resposta) {
    resposta.json()
      .then(function (dados) {
        objetoTweetCard.mostraTweet(dados)
      })
  })

objetoFetchData.buscaFollowers()
  .then(function (resposta) {
    resposta.json()
      .then(function (dados) {
        objetoFollowerCard.mostraFollowers(dados)
      })
  })

objetoFetchData.buscaUsuario()
  .then(function (resposta) {
    resposta.json()
      .then(function (users) {
        objetoUsuario.mostraUsuario(users)
      })
  })