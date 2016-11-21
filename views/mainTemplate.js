const html = require('yo-yo')



module.exports = mainTemplate

function mainTemplate(state, dispatch) {
  return html`
    <div>
      <h1>Get these things done!</h1>
      ${state.todos.map((todo, index) => Todo(todo, dispatch, index)) }
      <div>
        <input type='text'>
        <button>Click to add todo</button>
      </div>
    </div>
  `
}


function Todo (todoItem, dispatch, index) {
  return html`
    <div>
      <li
        onclick=${ () => dispatch({type: 'TOGGLE_TODO', payload: index})}
      >
        ${todoItem.id} ${todoItem.text} Completed: ${todoItem.completed}
      </li>
    </div>
  `
}
