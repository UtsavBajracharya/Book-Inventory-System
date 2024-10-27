# Book-Inventory-Management-System

Book Inventory Management System is a web application that manages and organizes book records. Users can add, filter, view, and export book data in CSV and JSON. this application has interfaces with different components like adding books, filtering and viewing the book list, and exporting the data.

#Technologies Used
- Frontend: React, Bootstrap, CSS
- Backend: Node.js, Express
- Database: MySQL (with Sequelize ORM)

#Features
- Add Book: Add new books to the inventory with details like title, author, genre, and ISBN.
- Filter Books: Filter the list of books based on various attributes (e.g., genre, author, date).
- Books List: Display a table of books in the inventory.
- Export buttons: Export the book list to CSV or JSON formats.
- Responsive Design: Optimized for desktop and mobile devices.

#Requirements

- Download and install Node.js from https://nodejs.org/en
- Download MySQL from https://dev.mysql.com/downloads/mysql/


Clone this project by running the command - git clone https://github.com/UtsavBajracharya/Book-Inventory-System in the command prompt

#Installation Steps

1. Backend Setup
In the backend, we use Node.js with Express.js for server functionality, Sequelize as the ORM, and dotenv for environment variables.

Install the following dependencies for the backend:
Navigate to the backend folder in your project and run the following commands:

- cd backend
- npm install express mysql2 sequelize sequelize-cli dotenv cors


2. Frontend Setup
We use React, Bootstrap for UI, and Axios on the front end to make HTTP requests and connect them to the backend API.

Install the following dependencies for the frontend:
Navigate to the frontend folder in your project and run the following commands:

- cd frontend
- npm install react-bootstrap bootstrap Axios

#Configuration

MySQL Database Setup

Create a MySQL database for the application:

- SQL query to create the database:

CREATE DATABASE book_inventory;

- SQL query to create a table: 

CREATE TABLE Books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  genre VARCHAR(100),
  publication_date DATE,
  isbn VARCHAR(20) UNIQUE NOT NULL
);

![image](https://github.com/user-attachments/assets/d326442f-6231-4ec7-bb3a-6192d7ec942b)


#Run the Application

Start the Backend Server
Go to the backend folder:

- npm start
- The backend will be running on http://localhost:4000.

![image](https://github.com/user-attachments/assets/ebc5e1f0-e294-41b4-a775-e8b2f6390166)


Start the Frontend Server
Go to the frontend folder:

- npm start
- The front end will be running on http://localhost:3000.

![image](https://github.com/user-attachments/assets/5105daaf-30b6-4190-bf49-75f39a08c468)


#Add Book

![image](https://github.com/user-attachments/assets/448ab36c-aa0b-4454-832e-e5c9777d585d)


#Book List

![image](https://github.com/user-attachments/assets/ec366527-0490-4998-a8d2-eed4deb97ac0)


#Filter Books

![image](https://github.com/user-attachments/assets/fe7944e3-add2-4f57-8e05-d7fa0c472f77)


#Download as CSV

![image](https://github.com/user-attachments/assets/5911b4d1-2237-45b2-a0b8-44ce0e6a26a6)


#Download as JSON

![image](https://github.com/user-attachments/assets/56147327-ccf3-419a-8b4b-800127f0bf5c)
