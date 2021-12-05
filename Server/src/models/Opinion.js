const { DataTypes, DATE } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('opinion', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        revRating: {
            type: DataTypes.ENUM('1','2','3','4','5'),
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
};