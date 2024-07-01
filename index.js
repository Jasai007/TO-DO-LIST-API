const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
    const { task } = req.body;
    if (task) {
        todos.push(task);
        res.status(201).json(task);
    } else {
        res.status(400).json({ error: 'Task is required!!' });
    }
});

// Delete a todo by index
app.delete('/todos/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index >= 0 && index < todos.length) {
        const deletedTodo = todos.splice(index, 1);
        res.json(deletedTodo);
    } else {
        res.status(404).send('Todo not found');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
