const clone = require('clone');

module.exports = reducer


function reducer(state, action) {
  let newState = clone(state) // ensures that the reducer does not alter the state

  switch(action.type) {
    case 'ADD_TODO':
      const { id, text, completed } = action.payload
      newState.todos.push({
        id: id,
        text: text,
        completed: completed
      })
      return newState
    case 'TOGGLE_TODO':
      newState.todos[action.payload].completed = !newState.todos[action.payload].completed
      return newState
    default:
      return newState
  }
}
