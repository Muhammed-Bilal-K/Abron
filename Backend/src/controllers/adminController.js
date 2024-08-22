const jwt = require('jsonwebtoken');

class AdminController {
    async adminLogin(req, res) {
        const { email, password } = req.body;

        try {

            if (email != process.env.ADMIN_EMAIL) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            if (password != process.env.ADMIN_PASS) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ id: email }, process.env.SECRET, { expiresIn: '1h' });

            res.cookie('token', token, {
                maxAge: 3600000,
                httpOnly: true,
                sameSite: 'none',
            });

            res.status(200).json({
                success: true,
                message: "Account logined successfully",
                token: token
            });
        } catch (error) {
            res.status(500).json({ message: 'Login failed', error });
        }
    }
}

module.exports = new AdminController();
