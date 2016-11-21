const redux = require('redux')
const morph = require('morphdom')
const html = require('yo-yo')
const request = require('superagent');

const mainTemplate = require('./views/mainTemplate')
const reducer = require('./reducer')
const state = require('./state')


const main = document.querySelector('main')
const app = document.createElement('div')
main.appendChild(app)


function appTemplate(state, dispatch) {
  return html`
    <div id='app'>
      ${mainTemplate(state, dispatch)}
    </div>
  `
}

const store = redux.createStore(reducer, state)
const { dispatch, getState, subscribe } = store


subscribe(() => {
  const state = getState()
  html.update(app, appTemplate(state, dispatch))
})

dispatch({type: 'INIT'})
