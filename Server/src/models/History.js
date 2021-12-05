const { DataTypes, DATE } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('history', {
        request: {
            type: DataTypes.ENUM('CREATE_PRODUCT', 'REMOVE_PRODUCT', 'ACTIVATE_PRODUCT', 'REMOVE_CATEGORY',
            'ACTIVATE_CATEGORY', 'CREATE_CATEGORY', 'REMOVE_OPINION', 'ACTIVATE_OPINION'),
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        opinionId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });
};