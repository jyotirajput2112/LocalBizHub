const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Health check endpoint for monitoring requirements
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', message: 'LocalBizHub Backend is running smoothly!' });
});

app.get('/', (req, res) => {
    res.send('Welcome to LocalBizHub API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});