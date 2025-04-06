
# Todo Express MySQL API

A simple REST API for managing todo items using Express.js and MySQL.

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Set up the database:
   - Create a MySQL database named "todos"
   - Run the SQL statements in `db_setup.sql` to create the required table

3. Configure environment variables:
   - Copy `.env.example` to `.env` (if not present)
   - Update the database credentials in `.env`

4. Start the server:
   ```
   npm start
   ```
   
   For development with auto-reload:
   ```
   npm run dev
   ```

5. The API will be available at: http://localhost:3000

## API Endpoints

- `GET /todos` - Get all todos
- `POST /todos` - Create a new todo
  - Request body: `{ "id": "task_id", "title": "Task title", "description": "Task description" }`
- `PUT /todos/:id` - Update a todo by ID
  - Request body: `{ "title": "Updated title", "description": "Updated description" }`
- `DELETE /todos/:id` - Delete a todo by ID

## Example Usage

Using curl to create a new todo:
```
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"id": "task4", "title": "Learn Node.js", "description": "Study Express and MySQL integration"}'
```
