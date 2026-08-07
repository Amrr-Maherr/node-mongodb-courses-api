export const getAllCourses = (req, res) => {
  res.status(200).json({
    message: "All courses retrieved successfully.",
  });
};

export const getCourseById = (req, res) => {
  res.status(200).json({
    message: "Course retrieved successfully.",
  });
};

export const createCourse = (req, res) => {
  res.status(201).json({
    message: "Course created successfully.",
  });
};

export const updateCourse = (req, res) => {
  res.status(200).json({
    message: "Course updated successfully.",
  });
};

export const deleteCourse = (req, res) => {
  res.status(200).json({
    message: "Course deleted successfully.",
  });
};
