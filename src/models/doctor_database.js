

const { Sequelize } = require('sequelize');
const connectSequelize = require ('../database');

const Doctor = connectSequelize.define('doctor',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    gender:{
        type: Sequelize.ENUM(
            'MASCULINO', 'FEMININO', 'NAO_BINARIO', 'OUTROS' 
        ),
        allowNull: false 
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
        allowNull: false 
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
        allowNull: false
    },

    totalOfAttendances:{
        type: Sequelize.INTEGER
    }

    //método: perguntar qual médico e qual paciente foir feito o atendimento, ter identificador do paciente



    
})


module.exports = Doctor;

