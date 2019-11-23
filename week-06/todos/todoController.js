function todoID(id, todo) {
  return todo.some(todo => {
    todo.id === id
  });
}

function removeThings(id, todo) {
  return todo.filter(todo => {
    todo.id !== id
  });
}

function updateThings(id, things, done, todo) {
  for (let todo of todo) {
    if (todo.id === id) {
      todo.things = things || 'unknown';
      todo.done = done === undefined ? todo.done : done;
      return todo;
    }
  }
}

module.exports = { todoID, removeThings, updateThings };