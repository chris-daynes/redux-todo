const html = require('yo-yo')
const beers = require('./beersTemplate')


function beerTemplate(state, dispatch) {
  return html`
  <div>${beers.map((beer) => {
    return html`<li>${beer.name}</li>`
  })}</div>
  `
}
