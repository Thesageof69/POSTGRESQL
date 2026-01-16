# PostgreSQL Node.js Application

A Node.js web application demonstrating PostgreSQL database integration with user management functionality.

## Description

This project implements a full-stack application using Node.js and PostgreSQL, featuring user CRUD operations through a RESTful API. It showcases backend development skills including database design, API routing, and MVC architecture.

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **PostgreSQL** - Relational database management system
- **Express.js** - Web application framework
- **JavaScript** - Programming language
- **HTML** - Frontend markup

## Project Structure

```
POSTGRESQL/
├── public/          # Static files and frontend assets
├── database.js      # Database connection configuration
├── main.js          # Application entry point
├── userController.js # User business logic
├── userModel.js     # User data model
├── userRoutes.js    # API route definitions
├── package.json     # Project dependencies
└── .gitignore       # Git ignore rules
```

## Features

- User management system (Create, Read, Update, Delete)
- PostgreSQL database integration
- RESTful API endpoints
- MVC architecture pattern
- Express.js routing

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Thesageof69/POSTGRESQL.git
cd POSTGRESQL
```

2. Install dependencies:
```bash
npm install
```

3. Set up your PostgreSQL database and configure the connection in `database.js`

4. Run the application:
```bash
node main.js
```

## Database Setup

Ensure you have PostgreSQL installed and running. Update the database configuration in `database.js` with your credentials:

```javascript
// Example configuration
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});
```

## API Endpoints

The application exposes RESTful endpoints for user management:

- `GET /users` - Retrieve all users
- `GET /users/:id` - Retrieve a specific user
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

## Skills Demonstrated

- Backend web development with Node.js
- Database design and PostgreSQL integration
- RESTful API architecture
- MVC design pattern
- Express.js middleware and routing
- Git version control

## Author

**Rayal** - [Thesageof69](https://github.com/Thesageof69)

## License

This project is available for educational and portfolio purposes.
