const redux = require('redux')
const morph = require('morphdom')
const html = require('yo-yo')
const request = require('superagent');

const mainTemplate = require('./views/mainTemplate')
const reducer = require('./reducer')

const state = {
  todos: [
    {
      id: 0,
      text: 'Learn web dev',
      completed: false
    }
  ]
}

const main = document.querySelector('main')

const store = redux.createStore(reducer, state)
const { dispatch, getState, subscribe } = store

var initView = main.appendChild(mainTemplate(state, dispatch))

subscribe(upDateView)


const upDateView = () => {
  let state = getState()
  let newView = mainTemplate(state, dispatch)
  morph(initView, newView)
}

dispatch(state, {type: 'INIT'})
