const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 📥 Create user
router.post('/', userController.createUser);

// 📤 Get all users
router.get('/', userController.getAllUsers);

// 🔁 Update user by ID_User
router.put('/:id', userController.updateUser);

// ❌ Delete user by ID_User
router.delete('/:id', userController.deleteUser);

module.exports = router;
