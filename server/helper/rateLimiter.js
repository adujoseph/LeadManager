const rateLimit = require('express-rate-limit');


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  standardHeaders: true, 
  legacyHeaders: false, 
  message: 'Too many requests from this IP, please try again later.',
  handler: (req, res) => {
    console.log(`Rate limit hit for IP: ${req.ip}`);
    res.status(403).json({
      message: 'Too many requests from this IP, please try again later.',
    });
  },
});

module.exports = limiter;