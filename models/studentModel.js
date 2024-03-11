const mongoose = require('mongoose');

// Define the schema for the student model
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    }
});

// Create a model based on the schema
const Student = mongoose.model('Student', studentSchema);

// Export the model to use in other files
module.exports = Student;
