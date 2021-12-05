const { DataTypes, DATE } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order', {
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        paymentId: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        idProduct: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false

        }
        
    });
};