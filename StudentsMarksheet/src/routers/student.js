const express = require('express');
const {v4 : uuidv4} = require('uuid')
const router = new express.Router();

var studentList = {
    data: []
}

router.post('/add', async (req, res) => {
    try {
        console.log("On Add Studend");
        var student = req.body;
        student.studentID = uuidv4();
        studentList.data.push(student);
        return res.status(201).send(
            student
        );
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/report', async (req, res) => {
    try {
        console.log("On report Studend");
        return res.status(200).send(
            studentList.data
        );
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;