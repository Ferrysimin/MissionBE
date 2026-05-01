const express = require("express");
const router = express.Router();
const courseService = require("../services/courseService");

// Get semua course
router.get("/", async (req, res) => {
  try {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get by id
router.get("/:id", async (req, res) => {
  try {
    const course = await courseService.getCourseById(req.params.id);
    if (!course)
      return res.status(404).json({ message: "Course tidak ditemukan" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//post tambah data
router.post("/", async (req, res) => {
  try {
    const newCourse = await courseService.addCourse(req.body);
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Patch update sebgian
router.patch("/:id", async (req, res) => {
  try {
    const result = await courseService.updateCourse(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    const result = await courseService.deleteCourse(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
