const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

// Create an Express app
const app = express();

app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Use the student routes in the app
app.use('/students', studentRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
