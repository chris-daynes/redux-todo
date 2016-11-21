const html = require('yo-yo')

module.exports = mainTemplate

function mainTemplate(state, dispatch) {
  console.log('Literally anything', state);
  return html`
    <div>
      <h1>Get these things done!</h1>
      ${state.todos.map((todo, index) => Todo(todo, dispatch, index)) }
    </div>
  `
}

function Todo (todoItem, dispatch, index) {
  return html`
    <div>
      <li onclick=${ () => dispatch({type: 'TOGGLE_TODO', payload: index}) } >
        ${todoItem.id} ${todoItem.text} Completed: ${todoItem.completed}
      </li>
    </div>
  `
}
