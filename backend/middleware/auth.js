const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.SECRET_KEY ;

// Middleware to verify the token
const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
  
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Failed to authenticate token" });
      }
  
      // If token is valid, store the decoded email in the request for future use
      req.email = decoded.email;
      next();
    });
  };
  
  module.exports = verifyToken;