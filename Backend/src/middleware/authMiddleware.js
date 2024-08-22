const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // const token = req.header('Authorization')?.split(' ')[1];
    const token = req.cookies.token;
    
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.admin = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
};

module.exports = { authMiddleware };
