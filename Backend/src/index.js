require('dotenv').config();
const express = require('express');
const connectDB = require('./confiq/database');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
connectDB();

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.use(
    cors({
        origin: ["http://localhost:5173"],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);

app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', userRoutes);
app.use('/api/v2/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
