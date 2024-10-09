# Bookshelf Project


## Project Overview
This was built as a school project. This full-stack web application is designed to help users manage a personal collection of books. The backend uses Node.js and Express.js, the frontend is built with Angular, and the database is MongoDB. This application allows users to perform CRUD operations on a bookshelf, including adding new books, viewing details of the books, updating information, and deleting books.

### Technologies Used
* Node.js
* Express.js
* MongoDB
* Angular
* TypeScript 

## Getting Started

### Prerequisites
* Node.js and npm
* Angular
* MongoDB (local instance)

### Installation
1. Clone the repository
    ```shell
    git clone https://github.com/ABarnesDev/bookshelf-project.git
    ```
2. Install the backend dependencies by navigating to the project's `api` folder in your terminal and running the following command:
    ```shell
    npm install
    ```
3. Install the frontend dependencies by navigating to the project's `client` folder in your terminal and running the following command:
   ```shell
   npm install
   ```

### Running the Application
1. Create a local MongoDB connection using the host localhost:27017.
2. Start the backend of the application by navigating to the project's `api` folder in your terminal and running the following command:
   ```shell
   node .
   ```
3. Start the frontend of the application by navigating to the project's `client` folder in your terminal and running the following command:
   ```shell
   npm run start
   ```
4. Open a browser and navigate to http://localhost:4200 to view the application.

## How to Use
* **View Books:** The "Bookshelf" page displays books that you are reading, the "Completed Books" page displays books you have already read, and the "Wish List" page displays books that you want to read. You can click on a book to view its details.
* **Add a Book:** To add a book, click the plus icon, fill in the required information, and click "Add Book."
* **Edit a Book:** While viewing a book's details, click the "Edit Book" button, change the book's information, and click the "Edit Book" button to save the changes.
* **Delete a Book:** While viewing a book's details, click the "Edit Book" button, then click the "Delete Book" button.