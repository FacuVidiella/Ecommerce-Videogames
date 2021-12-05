const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('wish', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};