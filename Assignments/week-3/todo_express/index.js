const express = require('express');
const fs = require('fs');
const app = express();
const filePath = 'todos.json';

app.use(express.json());


const readTodos = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        
        return [];
    }
};


const writeTodos = (todos) => {
    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};


app.post('/', (req, res) => {
    const todo = req.body;
    let todos = readTodos();
    todos.push(todo);
    writeTodos(todos);
    res.send('Todo added successfully');
});

app.get('/', (req, res) => {
    const todos = readTodos(); 
    res.send(todos);
});

app.get('/id', (req, res) => {
    const id = req.query.id;
    let todos=readTodos();
    todos.forEach(element => {
        if(element.id==id)
        {
            res.send(element);
        }
        
    }); 
    
});

app.listen(3000, ()=>{
    console.log("Running on port 3000");
});
