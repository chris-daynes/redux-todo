const clone = require('clone');

module.exports = reducer


function reducer(state, action) {
  newState = clone(state) // ensures that the reducer does not alter the state
  switch(action.type) {
    case 'ADD_TODO':
      
  }
}
