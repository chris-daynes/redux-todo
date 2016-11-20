const clone = require('clone');

module.exports = reducer


function reducer(state, action) {
  const { id, text, completed } = action.payload
  newState = clone(state) // ensures that the reducer does not alter the state
  switch(action.type) {
    case 'ADD_TODO':
      newState.todos.push({
        id: id,
        text: text,
        completed: completed
        })
          return newState
    default:
      return newState
  }
}
