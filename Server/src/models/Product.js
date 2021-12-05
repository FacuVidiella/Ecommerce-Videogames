const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        solds:{
            type:DataTypes.INTEGER,
            allowNull:true,
            defaultValue:0
        },
        discount:{
            type:DataTypes.INTEGER,
            allowNull:true,
            defaultValue:0
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        released: {
            type: DataTypes.DATE,
            allowNull: true
        },
        idApi: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        imgs: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: true,
        },
        platforms: {
                type: DataTypes.ARRAY(DataTypes.JSON),
                allowNull: true,
        }
        
    });
};