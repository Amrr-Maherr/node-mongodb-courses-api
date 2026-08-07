import mongoose from "mongoose";

const { Schema } = mongoose;

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: {
    name: { type: String, required: true },
    experience: { type: String, required: true },
    role: { type: String, required: true },
  },
  category: { type: String, required: true },
  level: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  language: { type: String, required: true },
  studentsCount: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  tags: { type: [String], default: [] },
  lessons: {
    type: [
      {
        title: { type: String, required: true },
        duration: { type: String, required: true },
      },
    ],
    default: [],
  },
  requirements: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

export const Course = mongoose.model("Course", courseSchema);
