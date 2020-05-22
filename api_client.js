const API_BASE_URL = "http://localhost:5000/"

async function getDecks() {
  let response = await fetch(API_BASE_URL + '/api/decks/');
  let data = await response.json()
  return data;
}

async function getCards(deckId) {
  let response = await fetch(API_BASE_URL + '/api/decks/' + deckId + "/cards/");
  let data = await response.json()
  return data;
}