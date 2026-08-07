import express from "express";
import CoursesRouter from "./routes/courses.routes.js";
import main from "./config/db.js";
import { logger } from "./middlewares/logger.js";

const app = express();
const port = process.env.PORT || 3000;

// Body parser
app.use(express.json());

// App middlewares
app.use(logger);

// App routes
app.use(CoursesRouter);

// Database
main();

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
