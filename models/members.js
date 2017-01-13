var Sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {

    return sequelize.define('members', {
            id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
            first_name: { type: Sequelize.STRING },
            last_name: { type: Sequelize.STRING },
            role: { type: Sequelize.STRING }
        },
        {
            tableName: 'members',
            underscored: true,
            freezeTableName: true,
            underscoredAll: true,
            timestamps: false

        });
}