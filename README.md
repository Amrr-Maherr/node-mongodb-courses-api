# Courses API

A simple REST API for managing courses, built with **Express**, **MongoDB**, and **Mongoose**.

## Features

- CRUD operations for courses
- MongoDB database connection (Mongoose)
- Course model with nested lessons and instructor schemas
- Request logging middleware
- Environment variables via `.env`
- ES Modules (`"type": "module"`)

## Requirements

- Node.js (v22+ recommended)
- npm
- MongoDB database (local or Atlas)

## Installation

```bash
npm install
```

## Configuration

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable       | Description                          |
| -------------- | ------------------------------------ |
| `PORT`         | Server port (default: `3000`)        |
| `MONGODB_URL`  | MongoDB connection string            |
| `DB_NAME`      | MongoDB database name                |

## Running the Server

```bash
node app.js
```

Or with auto-reload:

```bash
nodemon app.js
```

The server will start on the configured port and connect to the configured MongoDB database.

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
├── models/
│   └── course.model.js           # Mongoose Course model
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

## Course Model

```js
{
  title: String,
  description: String,
  instructor: { name, experience, role },
  category: String,
  level: String,
  duration: String,
  price: Number,
  discount: Number,
  language: String,
  studentsCount: Number,
  rating: Number,
  reviewsCount: Number,
  tags: [String],
  lessons: [{ title, duration }],
  requirements: [String],
  createdAt: Date
}
```

## Technologies

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://nodemon.io/) (development)
