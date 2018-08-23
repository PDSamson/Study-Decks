import $ from "jquery"
import store from './store'
const apiOrigin = 'https://secret-journey-16219.herokuapp.com/'

const signUpFunction = function (data) {
  return $.ajax({
    url: apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signInFunction = function (data) {
  return $.ajax({
    url: apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOutFunction = function () {
  return $.ajax({
    url: apiOrigin + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getDecksFunction = function () {
  return $.ajax({
    url: apiOrigin + '/decks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createDeckFunction = function (data) {
  return $.ajax({
    url: apiOrigin + '/decks',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteDeckFunction = function (id) {
  return $.ajax({
    url: apiOrigin + '/decks/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getCardsFunction = function (deck_id) {
  return $.ajax({
    url: apiOrigin + '/decks/' + deck_id + '/cards',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createCardFunction = function (data) {
  return $.ajax({
    url: apiOrigin + '/decks/' + data.card.deck_id + '/cards',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteCardFunction = function (id) {
  return $.ajax({
    url: apiOrigin + '/cards/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

export { signUpFunction, signInFunction, signOutFunction,
  getDecksFunction, createDeckFunction, deleteDeckFunction,
  getCardsFunction, createCardFunction, deleteCardFunction};
