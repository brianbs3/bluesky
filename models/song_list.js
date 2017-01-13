var Sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {

    return sequelize.define('song_list', {
            id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
            artist: { type: Sequelize.STRING },
            song_name: { type: Sequelize.STRING },
            key: { type: Sequelize.STRING }
        },
        {
            tableName: 'song_list',
            underscored: true,
            freezeTableName: true,
            underscoredAll: true,
            timestamps: false

        });
}