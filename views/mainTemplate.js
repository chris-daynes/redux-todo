const html = require('yo-yo')

module.exports = mainTemplate

function mainTemplate(state, dispatch) {
  console.log('Literally anything', state);
  return html`
    <div>
      <h1>Get these things done!</h1>
      ${state.todos.map(Todo) }
    </div>
  `
}

function Todo (todoItem) {
  return html`
    <div>
      <li>${todoItem.id} ${todoItem.text}</li>
    </div>
  `
}
