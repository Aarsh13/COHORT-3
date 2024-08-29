const { Command } = require('commander');
const program = new Command();
const fs = require('fs');
const filePath = './todos.json';

program
  .name('todo')
  .description('Using CLI to add and delete todos');

const readTodos = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        return {
            pending_todos: [],
            deleted_todos: []
            
        };
    }
};

const writeTodos = (todos) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(todos, null, 3), 'utf-8');
    } catch (err) {
        console.error('Failed to write todos to file:', err);
    }
};

program
  .command('addTodo')
  .description('Add a todo to the already existing list')
  .argument('<string>', 'todo to add')
  .action((task) => {
      let todos = readTodos();
      let pending = todos.pending_todos;      
      let size = todos.pending_todos.length + todos.deleted_todos.length;

      const todo = {
          id: size + 1,
          "task": task, 
          "completed": false
        } 

      pending.push(todo);
      writeTodos(todos);
      console.log(todo);
  });

program
.command("deleteTodo")
.description('mark a todo as completed from the list')
.argument('<int>', "id of the todo to mark as completed")
.action((id) => {
  let todos = readTodos();
  let pending = todos.pending_todos;
  let todoIndex = pending.findIndex(element => element.id == id);

  if (todoIndex !== -1) {
    todos.deleted_todos.push(pending.at(todoIndex))
    let deletedTodo = pending.splice(todoIndex, 1)[0];
    todos.pending_todos = pending;
    
    writeTodos(todos);
    console.log(`Todo with id ${id} has been deleted:`);
    console.log(deletedTodo);
  } else {
    console.log(`Todo with id ${id} not found.`);
  }
});

program
.command("markTodo")
.description('delete a todo from the list')
.argument('<int>', "id of the todo to delete")
.action((id) => {
  let todos = readTodos();
  let pending = todos.pending_todos;
  let todoIndex = pending.findIndex(element => element.id == id);

  if (todoIndex !== -1) {
    pending[todoIndex].completed=true;    
    todos.pending_todos = pending;
    
    writeTodos(todos);
    console.log(`Todo with id ${id} has been completed:`);
    
  } else {
    console.log(`Todo with id ${id} not found.`);
  }
});

program
  .command('Completed')
  .description('get a list of all completed todos')
  .action(()=>
  {
    let todos = readTodos();
    let pending = todos.pending_todos;
    let completed = pending.filter(element => element.completed === true);
    
    console.log("Here is a list of all the completed Todos:");
    console.log(completed);
  })

program
.command('Deleted')
.description('get a list of all deleted todos')
.action(()=>
{
  let todos = readTodos();
  let deleted = todos.deleted_todos;
  
  
  console.log("Here is a list of all the completed Todos:");
  console.log(deleted);
})
program.parse(process.argv);
