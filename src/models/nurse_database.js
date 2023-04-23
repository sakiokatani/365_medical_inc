

const { Sequelize } = require('sequelize');
const connectSequelize = require ('../database');

const Nurse = connectSequelize.define('nurse',{
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

    cofenuf:{
        type: Sequelize.STRING,
        allowNull: false,
        isUnique: true
    }

    //método: perguntar qual médico e qual paciente foir feito o atendimento, ter identificador do paciente
    
})


module.exports = Nurse;

