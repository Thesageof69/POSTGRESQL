const express = require('express');
const router = express.Router();
const auth = require('./authMiddleware');
const jwt = require('jsonwebtoken');



function auth(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token.' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
}
const {
  register,
  login,
  listUsers,
  getProfile,
  updateProfile,
} = require('./userController');

router.post('/register', register);
router.post('/login', login);
router.get('/users', auth, listUsers);
router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);

module.exports = {
    router,
    auth
};
