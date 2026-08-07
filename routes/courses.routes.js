import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
} from "../controllers/courses.controller.js";

const CoursesRouter = Router();

// Get all courses
CoursesRouter.get("/api/courses", getAllCourses);

// Get single course
CoursesRouter.get("/api/courses/:id", getCourseById);

// Create new course
CoursesRouter.post("/api/courses", createCourse);

// Update course
CoursesRouter.patch("/api/courses/:id", updateCourse);

// Delete course
CoursesRouter.delete("/api/courses/:id", deleteCourse);

export default CoursesRouter;
