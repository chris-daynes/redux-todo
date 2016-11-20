const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../reducer')


test('Hello world test', (t) => {
  t.ok(true)
  t.end()
})

test('to add a new todo', (t) => {
  //arrange
  const state = {
  todos: [
      {
        id: 0,
        text: 'Learn web dev',
        completed: false
      }
    ]
  }

  const expected = {
    todos: [
      {
        id: 0,
        text: 'Learn web dev',
        completed: false
      },
      {
        id: 1,
        text: 'Write Cool stuff',
        completed: false
      }
    ]
  }

  const action = {type: 'ADD_TODO', payload: {id: 1, text: 'Write Cool stuff', completed: false}}

  freeze(state)
  freeze(action)

  //assert
  const actual = reducer(state, action)

  //act
  t.deepEqual(actual, expected, 'Succesfully adds a todo')
  t.end()
})
