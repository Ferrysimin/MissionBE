const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

// Get semua data
router.get('/', async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get by id
router.get('/:id', async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  tambah data
router.post('/', async (req, res) => {
  try {
    const result = await userService.addUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// update data
router.patch('/:id', async (req, res) => {
  try {
    const result = await userService.updateUser(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// hapus data
router.delete('/:id', async (req, res) => {
  try {
    const result = await userService.deleteUser(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
