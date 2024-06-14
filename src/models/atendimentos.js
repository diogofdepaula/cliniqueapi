const { DataTypes, Model } = require('sequelize');
const database = require('../database/database')
const sequelize = database.sequelize;

class Atendimentos extends Model { }

Atendimentos.init({
    cpf: {
        type: DataTypes.STRING
    },
    data: {
        type: DataTypes.DATEONLY
    },
    gerador: {
        type: DataTypes.STRING
    },
    prodoctor: {
        type: DataTypes.INTEGER
    },
    valor: {
        type: DataTypes.DECIMAL
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'atendimentos'
});

module.exports = Atendimentos