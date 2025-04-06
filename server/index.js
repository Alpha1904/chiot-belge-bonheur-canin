
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Database connected successfully');
    connection.release();
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

testConnection();

// Routes
// GET /todos - Get all todos
app.get('/todos', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM todos');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'Failed to retrieve todos' });
  }
});

// POST /todos - Create a new todo
app.post('/todos', async (req, res) => {
  try {
    const { id, title, description } = req.body;
    
    if (!id || !title) {
      return res.status(400).json({ error: 'ID and title are required' });
    }
    
    const [result] = await pool.query(
      'INSERT INTO todos (id, title, description) VALUES (?, ?, ?)',
      [id, title, description || null]
    );
    
    res.status(201).json({ 
      message: 'Todo created successfully',
      id: id
    });
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Failed to create todo' });
  }
});

// PUT /todos/:id - Update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const todoId = req.params.id;
    const { title, description } = req.body;
    
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    
    const [result] = await pool.query(
      'UPDATE todos SET title = ?, description = ? WHERE id = ?',
      [title, description || null, todoId]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    res.json({ message: 'Todo updated successfully' });
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ error: 'Failed to update todo' });
  }
});

// DELETE /todos/:id - Delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const todoId = req.params.id;
    
    const [result] = await pool.query('DELETE FROM todos WHERE id = ?', [todoId]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
