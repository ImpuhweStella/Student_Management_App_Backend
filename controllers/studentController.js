const Student = require('../models/studentModel');

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getStudentByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const student = await Student.findOne({ email });
    if (!student) {
      res.status(404).json({ error: 'Student not found' });
    } else {
      res.status(200).json(student);
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createStudent = async (req, res) => {
  try {
    const newStudent = new Student({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      grade: req.body.grade
    });

    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


const updateStudentByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { email },
      req.body,
      { new: true }
    );
    if (!updatedStudent) {
      res.status(404).json({ error: 'Student not found' });
    } else {
      res.status(200).json(updatedStudent);
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteStudentByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const deletedStudent = await Student.findOneAndDelete({ email });
    if (!deletedStudent) {
      res.status(404).json({ error: 'Student not found' });
    } else {
      res.status(204).send();
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllStudents,
  getStudentByEmail,
  createStudent,
  updateStudentByEmail,
  deleteStudentByEmail
};

