const userModel = require('../models/users.model');

// Get semua users
const getAllUsers = (req, res) => {
  userModel.getAllUsers((err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
};

// Get users by ID
const getUserById = (req, res) => {
  const { id } = req.params;
  userModel.getUserById(id, (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });
    res.json(results[0]);
  });
};

// tambah data
const createUser = (req, res) => {
  userModel.createUser(req.body, (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: 'User created', id: results.insertId });
  });
};

// update user
const updateUser = (req, res) => {
  const { id } = req.params;
  userModel.updateUser(id, req.body, (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: 'User updated' });
  });
};

// hapus user
const deleteUser = (req, res) => {
  const { id } = req.params;
  userModel.deleteUser(id, (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: 'User deleted' });
  });
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
