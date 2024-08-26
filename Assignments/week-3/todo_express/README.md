# Todo List API

This is a simple Todo List API built with Express.js that allows you to create, retrieve, and manage todos. The todos are stored in a local JSON file (`todos.json`).

## Features

- **Add a Todo**: Add a new todo item to the list.
- **Get All Todos**: Retrieve the entire list of todos.
- **Get a Todo by ID**: Retrieve a specific todo item by its unique ID.

## Installation

1. **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Application**:
    ```bash
    node app.js
    ```

    The server will start on `http://localhost:3000`.

## API Endpoints

### 1. Add a Todo

- **Endpoint**: `POST /`
- **Description**: Adds a new todo item to the list.
- **Request Body**:
    ```json
    {
        "id": "1",
        "task": "Your task here"
    }
    ```
- **Response**: `Todo added successfully`

### 2. Get All Todos

- **Endpoint**: `GET /`
- **Description**: Retrieves all todo items.
- **Response**:
    ```json
    [
        {
            "id": "1",
            "task": "Your task here"
        }
    ]
    ```

### 3. Get a Todo by ID

- **Endpoint**: `GET /id?id=<todo-id>`
- **Description**: Retrieves a specific todo item by its ID.
- **Query Parameter**: `id` (string) - The unique ID of the todo item.
- **Response**:
    ```json
    {
        "id": "1",
        "task": "Your task here"
    }
    ```

## File Structure

- **app.js**: The main application file containing the API routes.
- **todos.json**: The JSON file where all todos are stored.

## How It Works

- **Data Storage**: Todos are stored in a local `todos.json` file. This file is read and written synchronously.
- **Adding Todos**: When a new todo is added, it is appended to the existing list in `todos.json`.
- **Fetching Todos**: You can retrieve all todos or fetch a specific one using its ID.

## Error Handling

- The application attempts to read from `todos.json`. If the file does not exist or is empty, it initializes an empty list of todos.

## Notes

- The application runs on `localhost:3000` by default.
- Make sure `todos.json` is writable by the application.
- This API does not include validation for input data; ensure IDs are unique to avoid duplicates.

---

This `README.md` should provide a clear overview of the functionality, setup, and usage of your Express.js Todo List API.