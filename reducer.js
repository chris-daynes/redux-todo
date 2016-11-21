const clone = require('clone');

module.exports = reducer


function reducer(state, action) {
  console.log('This is in the reducer');
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

    default:
      return newState
  }
}
