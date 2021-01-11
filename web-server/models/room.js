const { v4: uuid } = require('uuid');

module.exports = function(sequelize, DataTypes) {
    const Room = sequelize.define('room', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'room'
    });

    Room.associate = function (models) {
        Room.belongsTo(models.user, {
            as: 'player',
            foreignKey: 'User_id'
        });
    };

    Room.beforeCreate(room => room.id = uuid());

    return Room;
}
