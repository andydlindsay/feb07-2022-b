const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();
const port = 8001;

app.use(morgan('dev'));
app.use(express.json());
// app.use(cors());
app.use(express.static('../client/build'));

const todos = {
  abc: {
    id: 'abc',
    todo: 'Buy groceries'
  },
  def: {
    id: 'def',
    todo: 'Do taxes'
  },
  ghi: {
    id: 'ghi',
    todo: 'Get a foot massage'
  },
};

const genRandomId = () => {
  return Math.random().toString(36).substring(2, 5);
};

// GET /todos
app.get('/todos', (req, res) => {
  const todoArr = Object.values(todos);
  res.json(todoArr);
});

// DELETE /todos/:id
app.delete('/todos/:id', (req, res) => {
  delete todos[req.params.id];
  res.json({ success: true });
});

// POST /todos
app.post('/todos', (req, res) => {
  const todo = req.body.todo;
  const id = genRandomId();

  const newTodo = {
    id,
    todo
  };

  todos[id] = newTodo;

  res.json(newTodo);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
