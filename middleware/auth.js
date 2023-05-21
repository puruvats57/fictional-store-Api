// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  //verifying token
    req.user = { userId: decoded.userId };
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authenticate;
