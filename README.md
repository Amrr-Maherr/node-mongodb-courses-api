# Courses API

A simple REST API for managing courses, built with **Express** and **MongoDB**.

## Features

- CRUD operations for courses
- MongoDB database connection
- Request logging middleware
- ES Modules (`"type": "module"`)

## Requirements

- Node.js (v22+ recommended)
- npm

## Installation

```bash
npm install
```

## Running the Server

```bash
node app.js
```

Or with auto-reload:

```bash
nodemon app.js
```

The server will start on port `3000` and connect to the configured MongoDB database.

## Project Structure

```
courses_api/
├── app.js                        # Server entry point
├── config/
│   └── db.js                     # MongoDB connection
├── controllers/
│   └── courses.controller.js     # Request handlers
├── middlewares/
│   └── logger.js                 # Request logging middleware
├── routes/
│   └── courses.routes.js         # API routes
└── validation/
    └── course.validation.js      # Course validation
```

## API Endpoints

| Method   | Endpoint             | Description          |
| -------- | -------------------- | -------------------- |
| `GET`    | `/api/courses`       | Get all courses      |
| `GET`    | `/api/courses/:id`   | Get a single course  |
| `POST`   | `/api/courses`       | Create a new course  |
| `PATCH`  | `/api/courses/:id`   | Update a course      |
| `DELETE` | `/api/courses/:id`   | Delete a course      |

## Technologies

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (official Node.js driver)
- [Nodemon](https://nodemon.io/) (development)
