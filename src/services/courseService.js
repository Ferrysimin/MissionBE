const db = require('../db/connection');

// Get semua data
const getAllCourses = async () => {
  const [rows] = await db.query('SELECT * FROM courses');
  return rows;
};

// Get data by id
const getCourseById = async (id) => {
  const [rows] = await db.query('SELECT * FROM courses WHERE id = ?', [id]);
  return rows[0];
};

// Tambah data
const addCourse = async (data) => {
  const keys = Object.keys(data);
  const values = Object.values(data);
  const placeholders = keys.map(() => '?').join(', ');
  const sql = `INSERT INTO courses (${keys.join(', ')}) VALUES (${placeholders})`;
  await db.query(sql, values);
  return { message: 'Course berhasil ditambahkan' };
};

// update data
const updateCourse = async (id, data) => {
  const keys = Object.keys(data);
  const values = Object.values(data);
  if (keys.length === 0) return { message: 'Tidak ada data yang diupdate' };
  
  const setString = keys.map(key => `${key} = ?`).join(', ');
  const sql = `UPDATE courses SET ${setString} WHERE id = ?`;
  await db.query(sql, [...values, id]);
  return { message: 'Course berhasil diupdate' };
};

// hapus
const deleteCourse = async (id) => {
  await db.query('DELETE FROM courses WHERE id = ?', [id]);
  return { message: 'Course berhasil dihapus' };
};

module.exports = { getAllCourses, getCourseById, addCourse, updateCourse, deleteCourse };
