const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const router = express.Router();
const SECRET_KEY = 'yourSecretKey';  // Never expose this in production

router.use(bodyParser.json());

// Endpoint to generate a token for a one-time user
router.get('/generate-token', (req, res) => {
    const payload = { 
        user: 'one-time-user', 
        timestamp: new Date().getTime() 
    };
    
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
    res.json({ token });
});

module.exports = router;