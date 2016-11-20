const test = require('tape')
const reducer = require('../reducer')


test('Hello world test', (t) => {
  t.ok(true)
  t.end()
})

test('to add a new todo', (t) => {
  //arrange
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


  //assert
  //act
})
