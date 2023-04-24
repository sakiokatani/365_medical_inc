const { Sequelize } = require('sequelize');
const connectSequelize = require ('../database');

const Doctor = connectSequelize.define('doctor',{
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
        allowNull: false 
    },

    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
        isUnique: true
    },
    
    phoneNumber:{
        type: Sequelize.STRING,
    },

    academicInstitution:{
        type: Sequelize.STRING,
        allowNull: false 
    },

    crmuf:{
        type: Sequelize.STRING,
        allowNull: false,
        isUnique: true
    },

    specialization:{
        type: Sequelize.ENUM(
            'CLINICO_GERAL', 
            'ANESTESISTA', 
            'DERMATOLOGIA',
            'GINECOLOGIA', 
            'NEUROLOGIA', 
            'PEDIATRIA', 
            'PSIQUIATRIA', 
            'ORTOPEDIA'
        ),
        allowNull: false
    },

    systemStatus:{
        type: Sequelize.ENUM(
            'ATIVO',
            'INATIVO'
        ),
        defaultValue: 'ATIVO',
        allowNull: false
    },

    totalOfAttendances:{
        type: Sequelize.INTEGER,
        defaultValue: 0
    }

    
})

Doctor.associate = function(models) {
    Doctor.hasMany(models.Attendance, { foreignKey: 'AttendanceId' });
  };

module.exports = Doctor;

