const { Sequelize } = require('sequelize');
const connectSequelize = require ('../database');

const Patient = connectSequelize.define('patient',{
       

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    full_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    gender:{
        type: Sequelize.ENUM(
            'MASCULINO', 'FEMININO', 'NAO_BINARIO', 'OUTROS' 
        ),
    },

    dateOfBirth:{
        type: Sequelize.DATEONLY,
    },

    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
        isUnique: true
    },
    
    phoneNumber:{
        type: Sequelize.STRING,
    },

    emergencyContact:{
        type: Sequelize.STRING,
        allowNull: false 
    },

    alllergyList:{
        type: Sequelize.STRING,
    },

    specialCareList:{
        type: Sequelize.STRING,
    },

    healthInsurance:{
        type: Sequelize.STRING,
    },
    
    serviceStatus:{
        type: Sequelize.ENUM(
            'AGUARDANDO_ATENDIMENTO', 'EM_ATENDIMENTO', 'ATENDIDO', 'NAO_ATENDIDO'
        ),
        allowNull: false
    },
    
    totalOfAttendances:{
        type: Sequelize.INTEGER,
        defaultValue: 0
        
    },
},

) ;

Patient.associate = function(models) {
    Patient.hasMany(models.Attendance, { foreignKey: 'AttendanceId' });
  };

module.exports = Patient;
