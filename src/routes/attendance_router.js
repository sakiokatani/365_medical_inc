const express = require('express');
const attendanceRouter = express.Router();
const bodyParser = require('body-parser');
const { totalOfAttendance } = require('../../controllers/Attendance_create');
attendanceRouter.use(bodyParser.json());


attendanceRouter.get('/', (req, res) => {
    res.status(200).json({message: 'connection to root has been established.'});
});

//criar as funções ainda
attendanceRouter.post('/atendimentos', totalOfAttendance);

// module.exports = attendanceRouter;