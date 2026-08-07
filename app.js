import express from "express";
import CoursesRouter from "./routes/courses.routes.js";
import main from "./config/db.js";
import { logger } from "./middlewares/logger.js";

const app = express();
const port = process.env.PORT || 3000;
// app middlewares
app.use(logger);
// app routes
app.use(CoursesRouter);
// app db
app.use(main);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
