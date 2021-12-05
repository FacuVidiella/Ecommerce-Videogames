const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        phone: {
            type: DataTypes.TEXT,
            defaultValue: '',
        },      
        email: {
            type: DataTypes.TEXT,
            validate: {
                isEmail: true
            },
            unique: true,
            primaryKey:true,
            allowNull: false,
        },
        roleAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        superAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        photo: {
            type: DataTypes.TEXT,
            defaultValue: '',
        },
        isGoogle: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        productsBought: {
            type: DataTypes.ARRAY(DataTypes.JSON)
        }
    });
};