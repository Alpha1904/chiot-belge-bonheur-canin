
-- SQL script to set up the todos database and table

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS todos;

-- Use the todos database
USE todos;

-- Create todos table
CREATE TABLE IF NOT EXISTS todos (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Sample data (optional)
INSERT INTO todos (id, title, description) VALUES 
('task1', 'Complete project', 'Finish the Express Todo API project'),
('task2', 'Learn TypeScript', 'Study TypeScript fundamentals and advanced concepts'),
('task3', 'Go shopping', 'Buy groceries for the week');
