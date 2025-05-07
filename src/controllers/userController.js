const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.json(users);
  } catch (err) {
    console.error(err); // log เต็มไว้ดู
    res.status(500).json({
      error: 'Query failed',
      details: err?.message || 'Unknown error'
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    console.error('Create error:', err); // log เต็มไว้ใน console
    res.status(500).json({ error: 'Query failed', details: err.message }); // ✅ ปลอดภัย
  }
};


exports.updateUser = async (req, res) => {
  try {
    await User.update(req.params.id, req.body);
    res.json({ message: 'User updated' });
  } catch (err) {
    res.status(500).json({ error: 'Update failed', details: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.delete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed', details: err.message });
  }
};
