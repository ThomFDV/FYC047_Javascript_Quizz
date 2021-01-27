const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('room', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'room'
    });

    Room.associate = (models) => {
        Room.belongsToMany(models.user, {
            through: models.user_room,
            foreignKey: 'roomId'
        });
        Room.belongsTo(models.test);
    };

    Room.beforeCreate(room => room.id = uuid());

    return Room;
}
