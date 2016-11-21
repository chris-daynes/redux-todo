const html = require('yo-yo')

module.exports = mainTemplate

function mainTemplate(state, dispatch) {
  console.log('Literally anything');
  return html`
  <h1>This is some the awesome heading</h1>
  `
}
