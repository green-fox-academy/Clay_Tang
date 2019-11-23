const express = require('express');
const { todoID, removeThings, updateThings } = require('./todoController');
const todos = require('./assets/data');
const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/todos', (req, res) => {
  res.status(200).json(todos);
  
})

app.post('/todos', (req, res) => {
  let { id, things, done } = req.body;
  if (!things) {
    res.status(400).send('Missing todo content');

  }

  if (done === undefined) {
    done = false;

  }
  let newTodo = { id, things, done };
  todos.push(newTodo)
  res.status(201).send(`Todo added : ${JSON.stringify(newTodo)}`)
})

app.delete('/todos/:todoID', (req, res) => {
  const todoIdToDelete = parseInt(req.params.todoID);
  if (todoID(todoIdToDelete, todos)) {
    todos = removeThings(todoIdToDelete, todos);
    res.status(204).send();

  } else {
    res.status(404).send('ID not exist');

  }
})

app.put('/todos/:todoID', (req, res) => {
  const updateID = parseInt(req.params.todoID);
  let { things, done } = req.body;

  if (todoID(updateID, todos)) {
    const updated = updateThings(updateID, things, done, todos);
    res.status(200).send(`Successfully updated ${JSON.stringify(updated)}`);

  } else {
    res.status(404).send('ID not exist');

  }
})

app.listen(PORT, (req, res) => {
  console.log(`Server listening at port: ${PORT}`);
})
