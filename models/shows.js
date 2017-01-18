var Sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {

    return sequelize.define('shows', {
            id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
            venue: { type: Sequelize.STRING },
            ts: { type: Sequelize.TIMESTAMP }
        },
        {
            tableName: 'shows',
            underscored: true,
            freezeTableName: true,
            underscoredAll: true,
            timestamps: false

        });
}