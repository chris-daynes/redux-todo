const html = require('yo-yo')



module.exports = mainTemplate

function mainTemplate(state, dispatch) {



  return html`
    <div>
      <h1>Get these things done!</h1>
      ${state.todos.map((todo, index) => Todo(todo, dispatch, index)) }
      <div>
        <input type='text'>
        <button onclick=${ () => addTodo(dispatch) }>Click</button>
      </div>
    </div>
  `
}

function addTodo (dispatch) {
  const todo = document.querySelector('input').value
  console.log('this is the todo ', todo);
  return dispatch({
    type: 'ADD_TODO',
    payload: {text: todo}
  })
}

function Todo (todoItem, dispatch, index) {
  const customClass = todoItem.completed ? 'done' : ''
  return html`
    <div>
      <li
        class=${customClass}
        onclick=${ () => dispatch({type: 'TOGGLE_TODO', payload: index})}
      >
        ${todoItem.id} ${todoItem.text} Completed: ${todoItem.completed}
      </li>
    </div>
  `
}
