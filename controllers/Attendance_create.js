
// const express = require('express'); 
// const connectSequelize = require('../src/database');
//         // connectSequelize.sync({alter:true});
// const router = express.Router();
// const bodyParser = require('body-parser');
// router.use(bodyParser.json());

// const TotalOfAttendances = require('../src/models/numberOfAttendedPatients')
// const Patient = require("../src/models/patient_database");
// const Doctor = require('../src/models/doctor_database');


// async function totalOfAttendance(req, res){
//     try{

//         const data = {
//             doctorId: req.body.doctor_id,
//             patientId: req.body.patient_idd
//         }

//         const attendancePatient = await Patient.findOne(
//             {
//                 where:{
//                     id: data.patient_idd
//                 },
//             },
//         );
//         const attendanceDoctor = await Doctor.findOne(
//             {
//                 where:{
//                     id: data.doctor_id
//                 },
//             },
//         );

//         const newAttendace = await TotalOfAttendances.create(data);

//         attendancePatient.serviceStatus = 'ATENDIDO';
//         attendancePatient.totalOfAttendances = attendancePatient.totalOfAttendances +1;
//         attendanceDoctor.totalOfAttendances = attendanceDoctor.totalOfAttendances +1;
//         await attendancePatient.save();
//         await attendanceDoctor.save();

//         res.status(200).json({mensagem: `Atendimento registrado com sucesso:${newAttendace}`
            

// });
//     }catch(error){
//         console.error(error);
//         res.status(500).json({mensagem:"Erro ao atualizar registro de atendimento. Verifique os valores passados e tente novamente"})
//     }
// }

// module.exports = {totalOfAttendance};