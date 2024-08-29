# Todo CLI

This is a simple command-line interface (CLI) tool for managing todos. The application allows you to add, mark as completed, and delete todos, as well as retrieve lists of completed and deleted todos.

## Features

- **Add Todos:** Add a new todo to your list.
- **Mark Todos as Completed:** Mark an existing todo as completed.
- **Delete Todos:** Delete a todo from the list.
- **View Completed Todos:** Get a list of all completed todos.
- **View Deleted Todos:** Get a list of all deleted todos.

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/Aarsh13/COHORT-3/tree/main/Assignments/week-3/todo_cli.git
```

Navigate to the project directory:

```bash
cd todo_cli
```

Install the dependencies:

```bash
npm install
```

## Usage

### Add a Todo

To add a new todo to the list:

```bash
node todo.js addTodo "<your todo>"
```

### Mark a Todo as Completed

To mark a todo as completed:

```bash
node todo.js markTodo <id>
```

### Delete a Todo

To delete a todo from the list:

```bash
node todo.js deleteTodo <id>
```

### View Completed Todos

To view all completed todos:

```bash
node todo.js Completed
```

### View Deleted Todos

To view all deleted todos:

```bash
node todo.js Deleted
```

## File Structure

- **todos.json:** This file stores your todos in JSON format. It keeps track of pending and deleted todos.

## License

This project is open-source and available under the MIT License.

## Acknowledgements

This CLI tool was created as part of the COHORT-3 assignments.
